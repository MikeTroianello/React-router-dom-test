import React from "react";
import { useParams, Link } from "react-router-dom";
import foodArr from "../food.json";

const FoodDetails = () => {
  const { id } = useParams();

  let foundFood = foodArr.find((food) => {
    return food._id === id;
  });

  return (
    <div>
      <h3>{foundFood.name}</h3>
      <p>
        {foundFood.name} is a member of the {foundFood.type} food group
      </p>
      <Link to="/foodlist">Back to foods</Link>
    </div>
  );
};

export default FoodDetails;
