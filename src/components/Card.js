import React from "react";

const Card = ({item}) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-2">
      <div className="card h-100">
        <img src={item.image} className="card-img-top mb-2" alt="card_img" />
        <div className="card-body px-4 mt-3">
          <h5 className="card-head">{item.head}</h5>
          <p className="card-title">{item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
