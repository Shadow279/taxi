import React from "react";
import { Link } from "react-router-dom";

const TaxiList = ({ taxiList, onRemove, onView }) => {
  if (taxiList.length === 0)
    return (
      <div className="col-md-12 text-center">
        <div className="container">
          <h4 className="fontFami m-4 pageHead">
            Oops... No Taxi Available right now
          </h4>

          <div className="my-5">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/no-taxi-1-846546.png"
              alt=""
            />
          </div>

          <Link to="/generator">
            <button type="submit" className="btn btn-dark fontFami buttonDec">
              Start Adding Details...
            </button>{" "}
          </Link>
        </div>
      </div>
    );

  return (
    <div className="row">
      {taxiList.map((taxi) => (
        <div className="col-md-2 my-2">
          <div class="card">
            <div class="card-body">
              <Link to="/mapDisplay">
                <h4 class="card-title" className="fontFami mb-4">
                  {taxi.name}
                </h4>
              </Link>
              <p class="card-text" className="fontFami">
                Id: {taxi.taxiNumber}{" "}
              </p>
              <button
                type="submit"
                className="btn btn-primary fontFami mb-3 mr-3"
                onClick={() => onView(taxi)}
              >
                <i class="fa fa-eye" /> View{" "}
              </button>
              <button
                onClick={() => onRemove(taxi)}
                class="btn btn-danger fontFami mb-3"
              >
                <i class="fas fa-trash" /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaxiList;
