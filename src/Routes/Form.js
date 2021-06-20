/* eslint-disable max-lines */
import React from "react";
import { postCustomOrder } from "./../service/orders";
import { Header } from "./../components/Shared/header";
import { Container } from "../components/Form/container.js";
import { validateInputValue, isErrors } from "../utils/formValidation";
import "./../styles/Home.scss";

const HEADER_LABEL = "Custom order form";

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
    const {
      name,
      email,
      phone,
      weight,
      calories,
      ingredients,
      errors,
      submitError,
    } = this.state;
    return (
      <div className="app__container">
        <Header title={HEADER_LABEL} />
        <Container
          name={name}
          email={email}
          phone={phone}
          weight={weight}
          calories={calories}
          ingredients={ingredients}
          errors={errors}
          submitError={submitError}
          onClick={(event) => this.handleSubmit(event)}
          onChange={(event) => this.handleInputChange(event)}
        />
      </div>
    );
  }
}

export default Form;
