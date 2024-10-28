import React from 'react';
import axios from 'axios';
import { Star, User } from 'lucide-react';
import "../../../static/css/homePage.css"
import { useState , useEffect } from 'react';

const ProductDetails = ({postId}) => {
  const [post, setPost] = useState({});
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/posts/${postId}/`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Error loading data", err);
      });
    }, [postId]);
  
  useEffect(() => {
    axios
      .get(`/posts/${postId}/images/`)
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Error loading data", err);
      });
  }, [postId]);

  useEffect(() => {
    axios
      .get(`/posts/${postId}/reviews/`)
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log("Error loading data", err);
      });
    }, [postId]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="flex">
        <div className="w-1/2 pr-4">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.image}
              alt="Product"
              className="w-full h-auto object-contain rounded-lg mb-4"
            />
          ))}
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < post.avg_ratings ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span className="text-lg font-semibold">
              {post.avg_ratings ? post.avg_ratings.toFixed(1) : 'N/A'}
            </span>
            <span className="text-gray-500 dark:text-gray-300 ml-2">({reviews.length})</span>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-100">Publicado por:</p>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>{post.owner}</span>
            </div>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-100 mb-2">Categorías:</p>
            <div className="flex flex-wrap">
              {['categoria', 'categoria', 'categoria', 'categoria'].map((cat, index) => (
                <span key={index} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;