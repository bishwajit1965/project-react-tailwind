import React from "react";
import "./GymPriceCard.css";

const GymPriceCard = ({ product }) => {
  return (
    <div className="card bg-indigo-500 text-white rounded-md">
      <h2 className="font-bold">{product.name}</h2>
      <h4>{product.price}</h4>
    </div>
  );
};

export default GymPriceCard;
