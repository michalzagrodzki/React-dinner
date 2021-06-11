import React from "react";
import PropTypes from "prop-types";
import { InputList } from "./inputList";
import { Submit } from "./submit";

class Container extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    weight: PropTypes.string,
    calories: PropTypes.string,
    ingredients: PropTypes.string,
    errors: PropTypes.object,
  };

  handleSubmit() {
    this.props.onClick();
  }
  handleInputChange(event) {
    event.preventDefault();
    this.props.onChange(event);
  }
  render() {
    const { name, email, phone, weight, calories, ingredients, errors } =
      this.props;
    return (
      <div>
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
        <Submit submit={() => this.handleSubmit()} />
      </div>
    );
  }
}

export { Container };
