"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-neutral"
        onClick={() => console.log("Clicked")}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
