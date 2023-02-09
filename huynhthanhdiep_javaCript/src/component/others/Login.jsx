import React, { Component } from 'react'
import axios from "axios";
import Appurl from "../api/Appurl";
import { Link, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import validation from '../../validation/validation';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn: false,
    };
  }
  formSubmit = (e) => {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    if (email == "") toast.error("please write email");
    else if (password == "") toast.error("please write password");
    else if (!validation.passwordRegx.test(password))
      toast.error("password invalid");
    else {
      //thao tac dang nhap
      let loginBtn = document.getElementById("loginBtn");
      loginBtn.innerHTML = "Login...";
      alert(Appurl.login)
      const data = {
        email: this.state.email,
        password: this.state.password,
      };

      axios
        .post(Appurl.login, data)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.setState({ loggedIn: true }); //login thanh cong
        })
        .catch((error) => {
          console.log(error)
          toast.error(error.response.data.message, {
            //login that bai va thong bao loi
            position: "top-right",
          });
        });
    }
  };

  render() {
    //neu da login tu dong chuyen trang
    if (this.state.loggedIn) {
      return <Navigate to={"/profile"} />;
    }
    if (localStorage.getItem("token")) {
      return <Navigate to="/profile" />;
    }

    return (
      <div className="formlogin row">
        <div className="col-md-6 col-lg-6 col-xl-4  ">
          <h2 className="text-center"> LOGIN</h2>
          <form onSubmit={this.formSubmit}>
            <div className="form-outline mb-4"><label className="form-label" htmlFor="form3Example3">Email address</label>
              <input type="email" onChange={(e) => { this.setState({ email: e.target.value }) }} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" /></div>
            <div className="form-outline mb-3"><label className="form-label" htmlFor="form3Example4">Password</label>
              <input type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" /></div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0"><input className="form-check-input me-2" type="checkbox" id="form2Example3" defaultValue="true" /><label className="form-check-label" htmlFor="form2Example3">Remember me</label></div>
              <Link to='/forgetpassword'>Forget password?</Link>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button id='loginBtn' type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?<a href="#st">Register</a></p>
            </div>
          </form>
        </div>
        <ToastContainer />

        email:{this.state.email}<br />
        password:{this.state.password}<br />

      </div>
    )
  }
}

export default Login