import React from "react";
import { postCustomOrder } from "./../service/orders";
import { Container } from "../components/Form/container.js";
import { validateInputValue, isErrors } from "../utils/formValidation";
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

  async handleSubmit() {
    const filteredState = this.sweepState(this.state);
    if (!isErrors(filteredState.errors)) {
      this.setState({ submitError: null });
      const payload = { body: filteredState };
      await postCustomOrder(payload);
    } else {
      this.setState({ submitError: "Please check input errors" });
    }
  }
  validateInput(type, value) {
    let errors = validateInputValue(this.state.errors, type, value);
    if (Object.entries(errors).length > 0) {
      this.setState({ errors: errors });
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
    const { name, email, phone, weight, calories, ingredients, errors } =
      this.state;
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
            errors={errors}
            onClick={(event) => this.handleSubmit(event)}
            onChange={(event) => this.handleInputChange(event)}
          />
        </header>
      </div>
    );
  }
}

export default Form;
