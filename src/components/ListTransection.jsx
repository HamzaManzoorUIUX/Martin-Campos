import React from "react";

const ListTransection = ({ state, number }) => {
  const rewardPointsCalculater = (price) => {
    if (price > 50) {
      if (price > 100) {
        return (price - 100) * 2 + 50;
      } else {
        return price - 50;
      }
    } else {
      return 0;
    }
  };
  return (
    <div className="row">
      <div className="col-md-3">{number}</div>
      <div className="col-md-3">${state.price}</div>
      <div className="col-md-3">{rewardPointsCalculater(state.price)}</div>
      <div className="col-md-3">{state.date}</div>
    </div>
  );
};

export default ListTransection;
