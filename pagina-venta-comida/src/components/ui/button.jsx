import React from "react";

export function Button({ children, className }) {
  return (
    <button className={`bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition ${className}`}>
      {children}
    </button>
  );
}