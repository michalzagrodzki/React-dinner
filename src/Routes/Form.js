import React from "react";
import { postCustomOrder } from "./../service/orders";
import { Container } from "../components/Form/container.js";
import "./../styles/Home.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      name: null,
      email: null,
      phone: null,
      weight: null,
      calories: null,
      ingredients: null,
    };
  }

  render() {
    const { name, email, phone, weight, calories, ingredients } = this.state;
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
            onClick={(event) => this.handleSubmit(event)}
            onChange={(event) => this.handleInputChange(event)}
          />
        </header>
      </div>
    );
  }

  async handleSubmit() {
    const payload = {
      body: this.state,
    };
    await postCustomOrder(payload);
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
}

export default Form;
