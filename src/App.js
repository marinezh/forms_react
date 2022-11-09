import React, { Component } from "react";
import './App.css';
import Form from './Form';
import View from './View';
import Popup from "./Popup";


class App extends Component {

  state = {
    note : {firstame: "",lastname: "",phoneNumber: "",message: "",role:""},
    showPopup: false,
    
}

  changeHandler = (event) => {
    this.setState({

      note: { ...this.state.note, [event.target.name]: event.target.value },
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ showPopup: true });
    console.log(e.target)
    console.log(e.target.value)
    e.target.value = '';
  };

  closePopup = () => {
    this.setState({ showPopup: false });
    this.setState({ firstname: "" });
    this.setState({ lastname: "" });
    this.setState({ phone: "" });
    this.setState({ role: "" });
    this.setState({ message: "" });
  };

  // openModal
  // openPopup = () => this.setState({...modal, modal:true})
  

  render() {
    return (
      <div className="forms_app">
        {/* <h2>Fill the form </h2> */}
        <Form
          changeHandler={this.changeHandler}
          submitHandler={this.submitForm}
          {...this.state.note}
        
        />
        <View
           {...this.state.note}
          
        />

        {this.state.showPopup && <Popup closePopup={this.closePopup}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        phone={this.state.phone}
        role={this.state.role}
        message={this.state.message}/>}
        
        
    </div>
  );
}
  
}

export default App;
