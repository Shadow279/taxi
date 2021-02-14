import React from "react";
import style from "./styles.css";
import Navbar from "./components/Navbar";
import TaxiList from "./components/TaxiList";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Generator from "./components/Generator";
import { Link } from "react-router-dom";
import SimpleMap from "./components/SimpleMap";

class App extends React.Component {
  state = {
    taxiList: [],
    viewList: []
  };

  componentDidMount() {
    let taxiList = localStorage.getItem("taxiList");
    let viewList = localStorage.getItem("viewList");
    // parsing
    taxiList = JSON.parse(taxiList);
    viewList = JSON.parse(viewList);
    // defaulting to []
    taxiList = taxiList === null ? [] : taxiList;
    viewList = viewList === null ? [] : viewList;
    // saving to state
    this.setState({ taxiList });
    this.setState({ viewList });
  }

  updatetaxiList = taxiList => {
    this.setState({ taxiList: taxiList });
    localStorage.setItem("taxiList", JSON.stringify(taxiList));
  };

  // updateviewList = viewList => {
  //   this.setState({ viewList: viewList });
  //   localStorage.setItem("viewList", JSON.stringify(viewList));
  // };

  handleRemove = taxi => {
    let taxiList = this.state.taxiList;
    taxiList = taxiList.filter(p => p.taxiNumber !== taxi.taxiNumber);
    this.setState({ taxiList });
    localStorage.setItem("taxiList", JSON.stringify(taxiList));
  };

  handleView = taxi => {
    let viewList = this.state.viewList;
    viewList = [];
    viewList.push(taxi);
    console.log(viewList);
    this.setState({ viewList });
    localStorage.setItem("viewList", JSON.stringify(viewList));
  };

  render() {
    const { taxiList, viewList } = this.state;
    const { length: totalTaxi } = this.state.taxiList;

    return (
      <div className="mbody">
        <BrowserRouter>
          <Navbar count={taxiList.length} />
          <Route
            path="/generator"
            render={props => (
              <Generator
                {...props}
                updatetaxiList={this.updatetaxiList}
                taxiList={taxiList}
              />
            )}
          />
          <Route
            path="/mapDisplay"
            render={props => <SimpleMap {...props} viewList={viewList} />}
          />
          <Route
            path="/taxis"
            render={props => (
              <div className="col-md-12 text-center">
                <TaxiList
                  {...props}
                  taxiList={taxiList}
                  onRemove={this.handleRemove}
                  onView={this.handleView}
                />
                {totalTaxi !== 0 && <hr />}
                {totalTaxi !== 0 && (
                  <Link to="/generator">
                    <button
                      type="submit"
                      className="btn btn-dark fontFami buttonDec float-left"
                    >
                      Add More Taxi
                    </button>{" "}
                  </Link>
                )}
              </div>
            )}
          />
          <Route exact path="/" component={Welcome} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
