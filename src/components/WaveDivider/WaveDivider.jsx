import React from 'react';
import './WaveDivider.css';

const WaveDivider = () => (
  <div className="wave-divider" aria-hidden="true">
    <svg
      className="wave-svg"
      viewBox="0 0 200 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M0 15 C20 5, 40 25, 60 15 S100 5, 120 15 S160 25, 180 15 S200 5, 200 15"
        stroke="#E91E8C"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default WaveDivider;
