import ProductDetails from "./ui/ProductDetails";
import ReviewSection from "./ui/ReviewSection";
import React from "react";

const PostPage = () =>{
    return (
        <>
        <ProductDetails />
        <ReviewSection postId={3}/>
        </>
    );
}

export default PostPage;