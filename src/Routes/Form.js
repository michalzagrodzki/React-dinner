import React from "react";
import { postCustomOrder } from "./../service/orders";
import { Container } from "../components/Form/container.js";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateWeight,
  validateCalories,
  validateIngredients,
} from "../utils/formValidation";
import "./../styles/Home.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      name: null,
      email: null,
      phone: null,
      weight: null,
      calories: null,
      ingredients: null,
      errors: {},
      submitError: null,
    };
  }

  sweepState(state) {
    delete state.isLoading;
    return state;
  }

  isErrors(state) {
    return false;
  }

  async handleSubmit() {
    const filteredState = this.sweepState(this.state);
    if (!this.isErrors(filteredState)) {
      this.setState({ submitError: null });
      const payload = {
        body: filteredState,
      };
      await postCustomOrder(payload);
    } else {
      this.setState({ submitError: "Please check input errors" });
    }
  }
  validateInput(type, value) {
    let errors = this.state.errors;
    switch (type) {
      case "name":
        errors = { ...errors, name: validateName(value) };
        break;
      case "email":
        errors = { ...errors, email: validateEmail(value) };
        break;
      case "phone":
        errors = { ...errors, phone: validatePhone(value) };
        break;
      case "weight":
        errors = { ...errors, weight: validateWeight(value) };
        break;
      case "calories":
        errors = { ...errors, calories: validateCalories(value) };
        break;
      case "ingredients":
        errors = { ...errors, ingredients: validateIngredients(value) };
        break;
      default:
        break;
    }
    if (Object.entries(errors).length > 0) {
      this.setState({ errors: errors });
      console.log(this.state);
      return;
    }
  }
  handleInputChange(event) {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;
    this.validateInput(key, value);
    this.setState({ [key]: value });
  }

  render() {
    const { name, email, phone, weight, calories, ingredients } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>This is Form view</p>
          <Container
            name={name}
            email={email}
            phone={phone}
            weight={weight}
            calories={calories}
            ingredients={ingredients}
            onClick={(event) => this.handleSubmit(event)}
            onChange={(event) => this.handleInputChange(event)}
          />
        </header>
      </div>
    );
  }
}

export default Form;
