import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import ListTransection from "./components/ListTransection";
import MonthTotal from "./components/MonthTotal";

const App = () => {
  const [state, setState] = useState([]);
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
  const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      resolve({
        data: Object.keys([...new Array(90)]).map((obj) => ({
          transectionId: Number(obj) + 1,
          price: Math.round(Math.random() * 500),
          date: moment()
            .subtract(Number(obj) + 1, "days")
            .format("MM-DD-YYYY"),
        })),
      });
    });
  };
  useEffect(() => {
    getAllUsers()
      .then((e) => setState(e.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="container">
      <h1>Transection Points Details</h1>
      <MonthTotal state={state} month={1} title={"First Month"} />
      <MonthTotal state={state} month={2} title={"Second Month"} />
      <MonthTotal state={state} month={3} title={"Third Month"} />
      <div className="bg-secondary rounded p-3 my-5 text-white">
        <div className="row">
          <div className="col-md-6 text-center">
            <h2>Total Transections</h2>
          </div>
          <div className="col-md-6 text-center">
            <h2>
              {state.reduce((total, obj) => {
                return total + rewardPointsCalculater(Number(obj.price));
              }, 0)}
            </h2>
          </div>
        </div>
      </div>
      <h2>List of All Transections</h2>
      <div className="row mb-3">
        <div className="col-md-3 fw-bold">#</div>
        <div className="col-md-3 fw-bold">Price</div>
        <div className="col-md-3 fw-bold">Points</div>
        <div className="col-md-3 fw-bold">Date</div>
      </div>
      {state?.map((obj, i) => (
        <ListTransection key={i} number={i + 1} state={obj} />
      ))}
    </section>
  );
};

export default App;
