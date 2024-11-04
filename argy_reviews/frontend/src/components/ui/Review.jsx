import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import TimeSince from "../../utils/TimeSince";
import axios from "axios";

const Review = ({ review }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`/users/${review.owner}/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log("Error loading data", err);
      });
  }, [review.owner]);
  const firstLetter = user?.username ? user.username.charAt(0).toUpperCase() : '';
  return (
    <div className="border-t pt-4 border-gray-300 dark:border-gray-500 ">
      <div className="flex items-start mb-4">
        <div className="mr-4">
          {/*acá va el perfil del usuario*/}
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            <p>{firstLetter}</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <span className="font-semibold mr-2">{user.username}</span>
            <span className="text-gray-500 dark:text-gray-200 text-sm">
              {TimeSince(review.created_at)}
            </span>
          </div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-gray-700 dark:text-gray-100 line-clamp-2">
            {review.comment}
          </div>
          <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400 text-sm">
            <button className="flex items-center mr-4 hover:text-blue-500 transition-colors duration-200">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                ></path>
              </svg>
              0
            </button>
            <button className="flex items-center hover:text-blue-500 transition-colors duration-200">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                ></path>
              </svg>
              0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
