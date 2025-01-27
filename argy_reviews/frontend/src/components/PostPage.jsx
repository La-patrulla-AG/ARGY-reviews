import ProductDetails from "./ui/ProductDetails";
import ReviewSection from "./ui/ReviewSection";
import React from "react";
import { useParams } from "react-router-dom";

const PostPage = () =>{
    const { postId } = useParams();
    return (
        <>
        <ProductDetails postId={postId}/>
        <ReviewSection postId={postId}/>
        </>
    );
}

export default PostPage;