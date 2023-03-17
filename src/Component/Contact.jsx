import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Nav from "react-bootstrap/Nav";

import PreLoader from "./PreLoader";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tc4k20n",
        "template_qe73owo",
        form.current,
        "7FBVbwUAMD0HrpZmr"
      )
      .then(
        (result) => {
          alert("Thankyu");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <PreLoader />
      <div id="content">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-6 px-5 h-100 d-flex align-items-center">
              <div className="w-100">
                <div className="pb-5">
                  <h1 className="fw-bold">
                    <span className="text-warning">Contact</span> Me
                  </h1>
                </div>
                <Form ref={form} onSubmit={sendEmail}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="user_name"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="user_email"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Comments"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      name="message"
                    />
                  </FloatingLabel>
                  <div className="text-end">
                    <Button
                      variant="warning"
                      className="text-white px-5 py-2"
                      type="submit"
                      value="Send"
                    >
                      Send
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-md-6 h-100">
              <div className="text-center h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.168224934034!2d106.68434611458889!3d-6.241547495482003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa37fca66295%3A0x5cb118f5062da590!2sKomplek%20Setneg%20RI%2C%20Pondok%20Kacang%20Barat!5e0!3m2!1sen!2sid!4v1678984105030!5m2!1sen!2sid"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-100 w-100"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row sticky-bottom next-prev p-5">
            <div className="col">
              <Nav className="justify-content-between fw-n">
                <Nav.Link
                  id="nav"
                  href="/skill"
                  className={"btn py-2 px-4 btn-to btn-warning text-white"}
                >
                  <i className="bi bi-arrow-left-circle pe-2"></i> Skill
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
