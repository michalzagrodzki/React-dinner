import React from "react";
import { InputList } from "./inputList";
import { Submit } from "./submit";

class Container extends React.Component {
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
