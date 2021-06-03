import React from "react";

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
    };
  }

  handleOrder = (event) => {
    event.preventDefault();
    console.log(this.state.id);
  };

  render() {
    const { id } = this.state;
    if (!id) {
      return null;
    }

    return (
      <div>
        <button onClick={this.handleOrder}>Place an order</button>
      </div>
    );
  }
}

export { Actions };
