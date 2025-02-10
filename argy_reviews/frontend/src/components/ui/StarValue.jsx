// import React from "react";
// import { Star } from "lucide-react";

// const StarValue = ({ valoracion }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, index) => (
//         <Star
//           key={index}
//           className={`w-4 h-4 ${
//             index < valoracion
//               ? "text-yellow-400 fill-current"
//               : "text-gray-300"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// export default StarValue;

import React from "react";
import { Star } from "lucide-react";

const StarValue = ({ value }) => {
  // Ensure value is between 0 and 5
  const clampedValue = Math.max(0, Math.min(5, value));

  return (
    <div className={`flex items-center gap-0.5`}>
      {[...Array(5)].map((_, index) => {
        const fillPercentage = Math.max(0, Math.min(1, clampedValue - index));

        return (
          <div key={index} className="relative">
            {/* Background star (gray) */}
            <Star size={22} className="text-gray-300 dark:text-gray-700" fill="currentColor" />

            {/* Foreground star (yellow) with width based on fill percentage */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercentage * 100}%` }}
            >
              <Star
                size={22}
                className="text-yellow-400"
                fill="currentColor"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarValue;
