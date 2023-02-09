import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Appurl from '../api/Appurl';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validation from '../../validation/validation';
export class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      email: '',
      password: '',
      passwordConfirm: '',
      resetsuccess: false
    }
  }

  // Reset Form Submit Method
  formSubmit = (e) => {

    e.preventDefault();
    let email = this.state.email
    let password = this.state.password
    let passwordConfirm = this.state.passwordConfirm
    if (email == '') toast.error('please write email')
    else if (password == '') toast.error('please write password')
    else if (passwordConfirm == '') toast.error('please write password confirm')
    else if (!(validation.emailRegx).test(email)) toast.error('Email invalid')
    else if (!(validation.passwordRegx).test(password)) toast.error('Password invalid')
    else if (password != passwordConfirm) toast.error('Password and password confirm not same')
    else {
      //Goi API 
      const data = {
        token: this.state.token,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirm
      }
      alert('reset')
      axios.post(Appurl.resetpassword, data).then(response => {
        alert('reset xong')
        this.setState({ resetsuccess: true })
        toast.success(response.data.message, {
          position: "top-right"
        });
        document.getElementById("fromreset").reset();
      }).catch(error => {
        console.log('error' + error)
        toast.error(error.response.data.message, {
          position: "top-right"
        });
      });
    }
  }

  render() {
    //neu da reset thanh cong tu dong chuyen trang
    if (this.state.resetsuccess) {
      alert(this.state.resetsuccess)
      return <Navigate to={'/login'} />
    }
    return (
      <div className=" row text-center">
        <div className="d-flex justify-content-center col-md-3 col-sm-12">
        </div>
        <div className="d-flex justify-content-center col-md-6 col-sm-12">
          <form onSubmit={this.formSubmit}>
            <h4 className="section-title-login"> RESET PASSWORD </h4>
            <input type="text" placeholder="Enter Your Pin Code" onChange={(e) => { this.setState({ token: e.target.value }) }} />
            <input className="form-control m-2" type="email" placeholder="Enter Your Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
            <input className="form-control m-2" type="password" placeholder="Your New Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
            <input className="form-control m-2" type="password" placeholder="Confirm Your Password" onChange={(e) => { this.setState({ passwordConfirm: e.target.value }) }} />
            <button id='loginBtn' type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
          </form>
        </div>
        <div className="d-flex justify-content-center col-md-3 col-sm-12">
        </div>
        Email:{this.state.email} <br />
        password:{this.state.password} <br />
        passwordConfirm: {this.state.passwordConfirm}<br />

      </div>
    )
  }
}


export default ResetPassword