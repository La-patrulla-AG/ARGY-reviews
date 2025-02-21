import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const charLimit = 150;
  const text = children || "No hay descripción disponible";
  const isTruncated = text.length > charLimit;
  
  const displayText = isExpanded || !isTruncated 
    ? text 
    : text.substring(0, charLimit) + "...";

  return (
    <div className="read-more-container">
      <div className="description">
        {displayText}
      </div>
      {isTruncated && (
        <button 
          className="read-more-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;