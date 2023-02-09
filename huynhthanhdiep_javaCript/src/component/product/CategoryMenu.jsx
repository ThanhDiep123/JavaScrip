import React, { Component } from 'react'
import axios from 'axios'
import Appurl from '../api/Appurl'
import { Link } from 'react-router-dom'

export class CategoryMenu extends Component {
  constructor() {
    super()
    this.state = {
      categoryArray: []
    }
  }
  getData() {
    axios.get(Appurl.allCategories)
      .then((response) => {
        var data = response.data;
        this.setState({
          categoryArray: data
        })
      })
      .catch((error) => {
      })
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    var categoryArray = this.state.categoryArray;
    var myview = categoryArray.map((category, i) => {
      return (
        <div className="panel panel-default" key={i}>
          <div className="panel-heading">
            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordian" href={"#id" + i}><span className="badge pull-right"><i className="fa fa-plus" /></span>{category.catname}</a></h4>
          </div>
          <div id={"id" + i} className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                {
                  category.subcategories.map((subcat, j) => {
                    return (
                      <li key={j}><Link to={"/productBySubCategory/:"+subcat.subcatname}>{subcat.subcatname}</Link></li>
                    )
                  })
                }


              </ul>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          {myview}

        </div>
      </div>
    )
  }
}

export default CategoryMenu