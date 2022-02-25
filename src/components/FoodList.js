import React from "react";
import foodArr from "../food.json";
import { Link } from "react-router-dom";

const FoodList = () => {
  return (
    <div>
      <h3>All Foods</h3>
      {foodArr.map((food) => {
        return (
          <div
            style={{
              borderWidth: 1,
              margin: 10,
              backgroundColor: "lightcoral",
            }}
          >
            <Link to={`/food/${food._id}`}>{food.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default FoodList;
