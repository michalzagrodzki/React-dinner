import React from "react";
import PropTypes from "prop-types";
import { InputList } from "./inputList";
import { SelectList } from "./selectList";
import { Submit } from "./submit";
import { SubmitMessage } from "./submitMessage";

export default class Container extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    title: PropTypes.string,
    caption: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    weight: PropTypes.string,
    calories: PropTypes.string,
    selectedIngredients: PropTypes.array,
    availableIngredients: PropTypes.array,
    errors: PropTypes.object,
    submitError: PropTypes.string,
  };

  handleSubmit(event) {
    this.props.onClick(event);
  }
  handleInputChange(event) {
    event.preventDefault();
    this.props.onChange(event);
  }
  handleSelectChange(value) {
    this.props.onSelect(value);
  }
  render() {
    const {
      title,
      caption,
      name,
      email,
      phone,
      weight,
      calories,
      selectedIngredients,
      availableIngredients,
      errors,
      submitError,
    } = this.props;
    return (
      <div className={"form__container"}>
        <div className={"form__header"}>
          <h4>{title}</h4>
          <p>{caption}</p>
        </div>
        <form>
          <InputList
            name={name}
            email={email}
            phone={phone}
            weight={weight}
            calories={calories}
            errors={errors}
            onInputChange={(event) => this.handleInputChange(event)}
          />
          <SelectList
            selectedIngredients={selectedIngredients}
            availableIngredients={availableIngredients}
            onSelect={(value) => this.handleSelectChange(value)}
          />
          <SubmitMessage message={submitError} />
          <Submit submit={(event) => this.handleSubmit(event)} />
        </form>
      </div>
    );
  }
}
