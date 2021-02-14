import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

class TaxiGenerator extends React.Component {
  state = {
    taxi: {
      name: "",
      taxiNumber: "",
      latitude: "",
      longitude: ""
    },
    error: {
      name: "",
      taxiNumber: "",
      latitude: "",
      longitude: ""
    }
  };

  handleChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    const taxi = this.state.taxi;
    taxi[name] = value;
    this.setState(taxi);
    console.log(taxi);

    let error = this.state.error;

    if (name === "name") {
      if (value.length > 10)
        error.name = "Name must not be greater than 10 characters";
      else if (value.length < 5)
        error.name = "Name must not be less than 5 characters";
      else error.name = "";
    } else if (name === "taxiNumber") {
      if (this.props.taxiList.map((p) => p.taxiNumber).indexOf(value) !== -1)
        error.taxiNumber = "Taxi already exists";
      else if (value < 0) error.taxiNumber = "Taxi Number cannot be negative";
      else error.taxiNumber = "";
    } else if (name === "latitude") {
      if (value < -90 || value > 90)
        error.latitude = "Enter a valid Latitude value";
      else error.latitude = "";
    } else if (name === "longitude") {
      if (value < -180 || value > 180)
        error.longitude = "Enter a valid Longitude value";
      else error.longitude = "";
    }
  };

  handleSubmit = () => {
    const { error, taxi } = this.state;
    const taxiList = [...this.props.taxiList];

    const inputIsEmpty =
      !taxi.name || !taxi.taxiNumber || !taxi.latitude || !taxi.longitude;

    if (!taxi.name) error.name = "Name cannot be Empty";
    if (!taxi.taxiNumber) error.taxiNumber = "Taxi number cannot be Empty";
    if (!taxi.latitude) error.latitude = "Latitude cannot be Empty";
    if (!taxi.longitude) error.longitude = "Longitude cannot be Empty";

    if (
      !inputIsEmpty &&
      error.name === "" &&
      error.taxiNumber === "" &&
      error.latitude === "" &&
      error.longitude === ""
    ) {
      taxiList.push(taxi);
      this.resetValues();
    }
    this.props.updatetaxiList(taxiList);
  };

  resetValues = () => {
    const taxi = {
      name: "",
      taxiNumber: "",
      latitude: "",
      longitude: ""
    };
    this.setState({ taxi });
  };

  render() {
    const { taxi, error } = this.state;
    return (
      <div className="col-md-12 text-center">
        <div className="container">
          <h4 className="fontFami my-4 pageHead">Add Details</h4>
          <Input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            defaultValue={taxi.name}
            error={error.name}
            onChange={this.handleChange}
          />
          <Input
            name="taxiNumber"
            type="text"
            placeholder="Enter Taxi Number"
            defaultValue={taxi.taxiNumber}
            error={error.taxiNumber}
            onChange={this.handleChange}
          />
          <Input
            name="latitude"
            type="number"
            placeholder="Enter Latitude"
            defaultValue={taxi.latitude}
            error={error.latitude}
            onChange={this.handleChange}
          />
          <Input
            name="longitude"
            type="number"
            placeholder="Enter Longitude"
            defaultValue={taxi.longitude}
            error={error.longitude}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-dark fontFami my-4 buttonDec"
          >
            Add Taxi details
          </button>{" "}
          <Link to="/taxis">
            <button
              type="submit"
              className="btn btn-dark fontFami my-4 buttonDec"
            >
              Taxi List <i class="fas fa-arrow-circle-right fasSize" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default TaxiGenerator;
