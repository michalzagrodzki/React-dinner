/* eslint-disable max-lines */
import React from "react";
import { postOrder } from "./../service/orders";
import { getIngredients } from "./../service/ingredients";
import { Header } from "./../components/Shared/header";
import Container from "../components/Form/container.js";
import { validateInputValue, isErrors } from "../utils/formValidation";
import { toggleSelectedIngredient } from "./../utils/helpers";
import { FORM } from "./../utils/labels";
import "./../styles/Form.scss";
export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Custom dinner",
      isLoading: true,
      name: null,
      email: null,
      phone: null,
      weight: null,
      calories: null,
      selectedIngredients: [],
      errors: {},
      submitError: null,
      availableIngredients: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getIngredients();
      this.setState({
        availableIngredients: response.data,
      });
    } catch (error) {
      console.log(`Axios request failed: ${error}`);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  parseState(state) {
    const localState = { ...state };
    localState.ingredients = localState.selectedIngredients;
    delete localState.isLoading;
    delete localState.submitError;
    delete localState.availableIngredients;
    delete localState.selectedIngredients;
    return localState;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const filteredState = this.parseState(this.state);
    if (!isErrors(filteredState.errors)) {
      this.setState({ submitError: null });
      delete filteredState.errors;
      await postOrder(filteredState);
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

  handleSelect(ingredient) {
    toggleSelectedIngredient(this, ingredient);
  }

  render() {
    const {
      name,
      email,
      phone,
      weight,
      calories,
      selectedIngredients,
      availableIngredients,
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
          selectedIngredients={selectedIngredients}
          availableIngredients={availableIngredients}
          errors={errors}
          submitError={submitError}
          onClick={(event) => this.handleSubmit(event)}
          onChange={(event) => this.handleInputChange(event)}
          onSelect={(value) => this.handleSelect(value)}
        />
      </div>
    );
  }
}
