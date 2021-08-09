import React from "react";
import PropTypes from "prop-types";

class Actions extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

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
      <div className={"details__order"}>
        <button onClick={this.handleOrder}>Place an order</button>
      </div>
    );
  }
}

export { Actions };
