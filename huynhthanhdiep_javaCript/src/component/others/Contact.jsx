import React, { Component } from "react";
import axios from "axios";
import Appurl from "../api/Appurl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validation from "../../validation/validation";
export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  nameOnChange = (e) => {
    this.setState({ name: e.target.value });
  };
  emailOnChange = (e) => {
    this.setState({ email: e.target.value });
  };
  messageOnChange = (e) => {
    this.setState({ message: e.target.value });
  };

  componentDidMount() {
    let contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", this.onSubmitForm);
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;

    if (name.length == 0) toast.error("Please write name");
    else if (email.length == 0) toast.error("Please write email");
    else if (message.length == 0) toast.error("Please write message");
    else if (!validation.nameRegx.test(name)) toast.error("Name invalid");
    else {
      // gui du lieu di
      let sendBtn = document.getElementById("sendBtn");
      sendBtn.value = "Sending.....";

      let contactForm = document.getElementById("contactForm");
      sendBtn.innerHTML = "Sending...";
      let MyFormData = new FormData();
      MyFormData.append("name", name);
      MyFormData.append("email", email);
      MyFormData.append("message", message);

      axios
        .post(Appurl.PostContact, MyFormData)
        .then(function (response) {
          if (response.status == 200 && response.data == 1) {
            toast.success("Message Send Successfully");
            sendBtn.innerHTML = "Send";
            contactForm.reset();
          } else {
            toast.error("error");
            sendBtn.innerHTML = "Send";
          }
        })
        .catch(function (error) {
          toast.error(error);
        });
    }
  };

  render() {
    return (
      <div className="row no-gutters contact">
        <div className="col-md-7">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h3 className="mb-4">Contact Us</h3>
            <div id="form-message-warning" className="mb-4" />
            <form method="POST" id="contactForm" name="contactForm" className="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" htmlFor="name">Full Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" onChange={this.nameOnChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group"><label className="label" htmlFor="email"> Email Address</label><input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={this.emailOnChange} /></div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="#">
                      Message
                    </label>
                    <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" onChange={this.messageOnChange} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input id="sendBtn" type="submit" className="btn btn-primary" />
                    <div className="submitting" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div>
            name:{this.state.name}<br />
            email:{this.state.email}<br />
            message:{this.state.message}<br />
          </div>
        </div>

        <div className="col-md-5 d-flex "><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7516950361464!2d106.77279011420437!3d10.830304561159812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2sHo%20Chi%20Minh%20City%20College%20of%20Industry%20and%20Trade!5e0!3m2!1sfr!2s!4v1653966753445!5m2!1sfr!2s" width={400} height={400} loading="lazy" style={{ border: '0px' }} /></div>

        <ToastContainer />
      </div>
    );
  }
}

export default Contact;
