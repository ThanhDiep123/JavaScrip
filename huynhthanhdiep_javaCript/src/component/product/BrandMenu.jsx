import React, { Component } from "react";
import axios from "axios";
import Appurl from "../api/Appurl";


export class BrandMenu extends Component {
  constructor() {
    super();
    this.state = {
      brandArray: [],
    };
  }
  getData() {
    axios
      .get(Appurl.allBrand)
      .then((response) => {
        var data = response.data;
        this.setState({
          brandArray: data,
        });
      })
      .catch((error) => { });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    var brandArray = this.state.brandArray;
    var myView = brandArray.map((brand, i) => {
      return (
        <li key={i}>
          <a href="#st">
            {" "}
            <span className="pull-right">(32)</span>
            {brand}
          </a>
        </li>
      );
    });
    return (
      <div>
        <h2>Brands</h2>
        <div className="brands-name">
          <ul className="nav nav-pills nav-stacked">{myView}</ul>
        </div>
      </div>
    );
  }
}
export default BrandMenu;