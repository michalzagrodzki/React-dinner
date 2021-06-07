import React from "react";
import PropTypes from "prop-types";
import { InputList } from "./inputList";
import { Submit } from "./submit";

class Container extends React.Component {
  propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
  };

  handleSubmit() {
    this.props.onClick();
  }
  handleInputChange(event) {
    this.props.onChange(event);
  }
  render() {
    const { name, email, phone, weight, calories, ingredients } = this.props;
    return (
      <div>
        <InputList
          name={name}
          email={email}
          phone={phone}
          weight={weight}
          calories={calories}
          ingredients={ingredients}
          onInputChange={(event) => this.handleInputChange(event)}
        />
        <Submit submit={() => this.handleSubmit()} />
      </div>
    );
  }
}

export { Container };
