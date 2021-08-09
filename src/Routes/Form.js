/* eslint-disable max-lines */
import React from "react";
import { postOrder } from "./../service/orders";
import { Header } from "./../components/Shared/header";
import Container from "../components/Form/container.js";
import { validateInputValue, isErrors } from "../utils/formValidation";
import { FORM } from "./../utils/labels";
import "./../styles/Form.scss";

export default class Form extends React.Component {
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
      await postOrder(payload);
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
        <Header title={FORM.HEADER_LABEL} />
        <Container
          title={FORM.FORM_TITLE}
          caption={FORM.FORM_CAPTION}
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
