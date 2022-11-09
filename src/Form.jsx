import React from "react";
import "./Form.css";

const Form = (props) => {
 
  return (
    <div>
      <h2>Fill in the form</h2>
      <form action="#">
        <label htmlFor="first_name">First name</label>
        <input
          name="firstname"
          type="text"
          id="first_name"
          onChange={props.changeHandler}
        />

        <label htmlFor="last_name">Last name</label>
        <input
          name="lastname"
          type="text"
          id="last_name"
          onChange={props.changeHandler}
        />

        <label htmlFor="phone_number">Phone number</label>
        <input
          name="phoneNumber"
          type="text"
          id="phone_number"
          onChange={props.changeHandler}
        />

        <label htmlFor="selsect">Role</label>
        <select name="role" id="select" onChange={props.changeHandler}>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="textarea">Message</label>
        <textarea
          name="message"
          id="textarea"
          cols="30"
          rows="10"
          onChange={props.changeHandler}
              ></textarea>
              <button type="submit" onClick={props.submitHandler}>Send</button>
          </form>
        
    </div>
  );
};
export default Form;
