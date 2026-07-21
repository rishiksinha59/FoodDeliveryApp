import React from "react";
import "./FoodItemSkeleton.css";

const FoodItemSkeleton = () => {
  return (
    <div className="food-item-skeleton">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton-info">
        <div className="skeleton-name-rating">
          <div className="skeleton skeleton-name"></div>
          <div className="skeleton skeleton-rating"></div>
        </div>
        <div className="skeleton-desc">
          <div className="skeleton skeleton-desc-line"></div>
          <div className="skeleton skeleton-desc-line short"></div>
        </div>
        <div className="skeleton skeleton-price"></div>
      </div>
    </div>
  );
};

export default FoodItemSkeleton;
