import React from "react";
import PropTypes from "prop-types";
import { InputList } from "./inputList";
import { Submit } from "./submit";
import { SubmitMessage } from "./submitMessage";

class Container extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    caption: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    weight: PropTypes.string,
    calories: PropTypes.string,
    ingredients: PropTypes.string,
    errors: PropTypes.object,
    submitError: PropTypes.string,
  };

  handleSubmit() {
    this.props.onClick();
  }
  handleInputChange(event) {
    event.preventDefault();
    this.props.onChange(event);
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
      ingredients,
      errors,
      submitError,
    } = this.props;
    return (
      <div className={"form__container"}>
        <div className={"form__header"}>
          <h4>{title}</h4>
          <p>{caption}</p>
        </div>
        <InputList
          name={name}
          email={email}
          phone={phone}
          weight={weight}
          calories={calories}
          ingredients={ingredients}
          errors={errors}
          onInputChange={(event) => this.handleInputChange(event)}
        />
        <SubmitMessage message={submitError} />
        <Submit submit={() => this.handleSubmit()} />
      </div>
    );
  }
}

export { Container };
