import React from "react";
import "./Popup.css";

const Popup = (props) => {
    return (
      <div className="Popup">
        <div className="overlay">
                <div className="popupWindow">
                <button className="modal_close" onClick={props.closePopup}>x</button>
           
            <p>First name: {props.firstname}</p>
            <p>Last name: {props.lastname}</p>
            <p>Phone number: {props.phoneNumber}</p>
            <p>Role: {props.role}</p>
            <p>Message: {props.message}</p>
            <div className="buttons">
             
              <button onClick={props.closePopup}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Popup;