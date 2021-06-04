import React from "react";
import { InputList } from "./inputList";
import { Submit } from "./submit";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      weight: null,
      calories: null,
      ingredients: null,
    };
  }
  handleSubmit(event) {
    this.props.onClick(event);
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    const { name, email, phone, weight, calories, ingredients } = this.state;
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
        <Submit submit={() => this.handleSubmit(this.state)} />
      </div>
    );
  }
}

export { Container };
