import moment from "moment/moment";
import React from "react";

const MonthTotal = ({ state, month, title }) => {
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
    <div className="row my-3">
      <div className="col-md-6 text-center">{title}</div>
      <div className="col-md-6 text-center">
        {state
          .filter(
            (obj) =>
              moment(new Date(obj.date)) > moment().subtract(month, "month")&&moment(new Date(obj.date)) < moment().subtract(month-1, "month")
          )
          .reduce((total, obj) => {
            return total + rewardPointsCalculater(Number(obj.price));
          }, 0)}
      </div>
    </div>
  );
};

export default MonthTotal;
