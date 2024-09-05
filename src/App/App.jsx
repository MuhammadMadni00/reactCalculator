import React, { Component } from "react";
import "./App.css";
import OperatorsNumSection from "./operators-num-section/operators-num-section.jsx";

class CalculatorApp extends Component {
  state = {
    value: "0",
  };

  ButtonPressed = (btn) => {
     const operators = ["+", "-", "*", "/"];
    if (btn === "=") {
      try {
        const expression = this.state.value.replace(/x/g, "*");
        this.setState({ 
          value: eval(expression).toString(), // Ensure result is converted to string
        });
      } catch (error) {
        this.setState({
          value: "Error",
        });
      }
    }
    else if (btn === "AC") {
      this.setState({
        value: "0",
      });
    }
    else if (btn === "CE") {
      if (this.state.value.length === 1) {
        this.setState({
          value: "0", 
        });
      } else {
        this.setState({
          value: this.state.value.slice(0, -1), 
        });
      }
    }
    else {
      const lastChar = this.state.value.slice(-1);
      if (operators.includes(lastChar) && operators.includes(btn)) {
        return; 
      }
 
      if (this.state.value === "0" && btn !== ".") {
        this.setState({
          value: btn,
        });
      } else {
        this.setState({
          value: this.state.value + btn,
        });
      }
    }
  };
  
  render() {
    return (
      <div className="calculator-app">
        <div className="result-section">
          <h1> {this.state.value} </h1>
        </div>
        <OperatorsNumSection onClick={this.ButtonPressed} />
      </div>
    );
  }
}

export default CalculatorApp;
