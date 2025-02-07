import React, { useState } from "react";

const ImagePreview = ({ image, onDelete, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="relative w-36 h-48 group">
        <img
          src={image}
          alt={`Upload ${index + 1}`}
          className="w-full h-full object-cover border rounded-md"
        />

        {/* Preview Button */}
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="absolute inset-0 m-auto w-8 h-8 opacity-0 group-hover:opacity-75 transition-opacity duration-200 bg-gray-800 rounded-full flex items-center justify-center"
          aria-label="Preview image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>

        {/* Delete Button */}
        <button
          type="button"
          onClick={() => onDelete(index)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-200"
          aria-label="Delete image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Expanded View Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <img
              src={image}
              alt={`Upload ${index + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg"
              aria-label="Close preview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePreview;
