import React from "react";
import "./View.css";

const View = (props) => {
  return (
    <div>
      <h2>Check your input</h2>
      <div className="View_form">
        <div className="view">
          <p>First name:</p>
          <p> {props.firstname}</p>
        </div>
        <div className="view">
          <p>Last Name:</p>
          <p>{props.lastname}</p>
        </div>
        <div className="view">
          <p>Phonenumber:</p>
          <p>{props.phoneNumber}</p>
        </div>
        <div className="view">
          <p>Role:</p>
          <p>{props.role}</p>
        </div>
        <div className="view">
          <p>Message:</p>
          <p className="message">{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default View;
