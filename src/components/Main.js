import React, { Component } from "react";
import results from "../data/sample_data.json";
import Header from "./Header";
import Destinations from "./Destinations";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: results
    };
  }
  render() {
    const { results } = this.state.results;
    return (
      <div className="container mx-5">
        <Header data={results} />
        <div className="main container mt-4 pt-1">
          <div className="row">
            <Destinations data={results} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
