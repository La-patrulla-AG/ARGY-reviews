import "../../../static/css/homePage.css";
import React from "react";
import { Star } from "lucide-react";

const StarValue = ({ valoracion }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < valoracion
              ? "text-yellow-400 fill-current"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default StarValue;
