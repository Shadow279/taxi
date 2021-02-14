import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="col-md-12 text-center">
      <div className="container">
        <h4 className="fontFami my-3 pageHead">Enjoy Travelling with Us...</h4>
        <div>
          <img
            src="https://www.taximobility.com/blog/wp-content/uploads/2018/04/blog_2.png"
            alt=""
            width="100%"
          />
        </div>
        <Link to="/generator">
          <button
            type="submit"
            className="btn btn-dark fontFami mt-4 buttonDec start-travel"
          >
            Start Travelling...
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
