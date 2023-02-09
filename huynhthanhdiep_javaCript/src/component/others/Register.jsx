import React, { Component } from "react";
import Appurl from "../api/Appurl";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validation from "../../validation/validation";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      loggedIn: false,
    };
  }
  nameOnChange = (e) => {
    this.setState({ name: e.target.value });
  };
  emailOnChange = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordOnChange = (e) => {
    this.setState({ password: e.target.value });
  };
  passwordConfirmOnChange = (e) => {
    this.setState({ passwordConfirm: e.target.value });
  };
  componentDidMount() {
    let registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", this.onSubmitRegister);
  }
  onSubmitRegister = (e) => {
    e.preventDefault();
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    let passwordConfirm = this.state.passwordConfirm;
    if (name == "") toast.error("please write name");
    else if (email == "") toast.error("please write email");
    else if (password == "") toast.error("please write password");
    else if (passwordConfirm == "")
      toast.error("please write password Confirm");
    else if (!validation.nameRegx.test(name)) toast.error("Name invalid");
    else if (!validation.emailRegx.test(email)) toast.error("Email invalid");
    else if (!validation.passwordRegx.test(password))
      toast.error("password invalid");
    else if (password != passwordConfirm)
      toast.error("password and password confirm not same");
    else {
      //gui thong tin dang ky
      let btnRegister = document.getElementById("registerBtn");
      btnRegister.innerHTML = "registering...";
      //goi API gui data
      const data = {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirm,
      };
      axios
        .post(Appurl.register, data)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.setState({ loggedIn: true });
        })
        .catch((error) => {
          console.log(error);

          toast.error(error.response.data.message, {
            position: "top-right",
          });
        });
    }
  };

  render() {
    //kiem tra neu da login Redirect to profile page
    if (this.state.loggedIn) {
      return <Navigate to={"/profile"} />;
    }
    if (localStorage.getItem("token")) {
      return <Navigate to="/profile" />;
    }

    return (
      <div>
        <section
          className="h-100 h-custom register"
          style={{ backgroundColor: "rgb(143, 196, 183)" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-8 col-xl-6">
                <div className="card rounded-3">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      Registration Info
                    </h3>
                    <form className="px-md-2" id="registerForm">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1q">
                          Name
                        </label>
                        <input type="text" id="txtName" onChange={this.nameOnChange} className="form-control" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1q">
                          Email
                        </label>
                        <input type="text" id="txtEmail" onChange={this.emailOnChange} className="form-control" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1q">
                          Password
                        </label>
                        <input type="password" id="txtPassword" onChange={this.passwordOnChange} className="form-control" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1q">
                          Confirm Password
                        </label>
                        <input type="password" id="txtPasswordConfirm" onChange={this.passwordConfirmOnChange} className="form-control" />
                      </div>
                      <button id="registerBtn" type="submit" className="btn btn-success btn-lg mb-1">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
        name:{this.state.name}
        <br />
        email:{this.state.email}
        <br />
        password:{this.state.password}
        <br />
        passconfirm:{this.state.passwordConfirm}
        <br />
      </div>
    );
  }
}
export default Register;
