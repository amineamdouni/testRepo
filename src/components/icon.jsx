import React, { useState } from "react";

function SvgAnimation({ success }) {
  const [isSuccess, setIsSuccess] = useState(success);

  return (
    <div className="svg-container">
      <svg
        className={isSuccess ? "success" : "error"}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2"
      >
        <circle
          className="path circle"
          fill="none"
          stroke={isSuccess ? "#73AF55" : "#D06079"}
          strokeWidth="6"
          strokeMiterlimit="10"
          cx="65.1"
          cy="65.1"
          r="62.1"
        />
        {isSuccess ? (
          <polyline
            className="path check"
            fill="none"
            stroke="#73AF55"
            strokeWidth="6"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5"
          />
        ) : (
          <>
            <line
              className="path line"
              fill="none"
              stroke="#D06079"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="34.4"
              y1="37.9"
              x2="95.8"
              y2="92.3"
            />
            <line
              className="path line"
              fill="none"
              stroke="#D06079"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="95.8"
              y1="38"
              x2="34.4"
              y2="92.2"
            />
          </>
        )}
      </svg>
      <p className={isSuccess ? "success" : "error"}>
        {isSuccess ? "Oh Yeah!" : "Bummer!"}
      </p>
    </div>
  );
}

export default SvgAnimation;
