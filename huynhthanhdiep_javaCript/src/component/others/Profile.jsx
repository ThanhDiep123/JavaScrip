import React, { Component } from 'react'
import axios from "axios";
import Appurl from "../api/Appurl";
import { Link, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validation from "../../validation/validation";
export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      profilePhoto: '',
      loggedIn: false,
    }
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      }
      axios.get(Appurl.UserData, config).then(response => {
        console.log(response)
        var userData = response.data
        this.setState({
          name: userData.name,
          email: userData.email,
          level: userData.level,
          profilePhoto: userData.profile_photo_url
        })
      }).catch(error => {
        toast.error(error.response.data.message, {
          position: "top-right"
        });
      });
    }
  }
  render() {
    if (!localStorage.getItem('token')) {
      return <Navigate to="/login" />
    }
    return (
      <div className="profile">
        <h2 className="text-center">PROFILE </h2>
        <ul className="list-group">
          <li className="list-group-item"><img src={this.state.profilePhoto} /></li>
          <li className="list-group-item">Name :  {this.state.name} </li>
          <li className="list-group-item">Email :  {this.state.email} <Link to='/orderlist'><button className="btn btn-success"> All Orders</button></Link></li>
        </ul>
        <ToastContainer />
      </div>
    )
  }
}

export default Profile