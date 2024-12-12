import React from "react";

const Card = ({ product }) => {
  const { image, title, description } = product;
  return (
    <div className="col-3">
      <div className="card">
        <img className="card-img" src={image} />
        <div className="card-body">
          <h3>{title}</h3>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
