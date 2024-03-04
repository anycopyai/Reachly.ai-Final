// Badge.js
import React from "react";

const Badge = ({ color, value }) => {
  return (
    <div
      className={`inline-block px-2 py-[0.5] rounded-full bg-${color}-100 text-${color}-800`}
    >
      {value}
    </div>
  );
};

export default Badge;
