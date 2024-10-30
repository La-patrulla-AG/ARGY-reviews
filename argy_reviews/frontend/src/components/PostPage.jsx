import ProductDetails from "./ui/ProductDetails";
import ReviewSection from "./ui/ReviewSection";
import React from "react";
import { useParams } from "react-router-dom";

const PostPage = () =>{
    const { id } = useParams();
    return (
        <>
        <ProductDetails postId={id}/>
        <ReviewSection postId={id}/>
        </>
    );
}

export default PostPage;