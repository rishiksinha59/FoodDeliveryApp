import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import FoodItemSkeleton from "../FoodItemSkeleton/FoodItemSkeleton";

const FoodDisplay = ({ category }) => {
  const { food_list, loading } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, index) => <FoodItemSkeleton key={index} />)
          : food_list.map((item, index) => {
              if (!item || !item._id) return null;
              if (category === "All" || category === item.category) {
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />;
              }
            })}
      </div>
    </div>
  );
};

export default FoodDisplay;
