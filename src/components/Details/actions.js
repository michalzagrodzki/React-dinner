import React from "react";
import PropTypes from "prop-types";

class Actions extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  handleOrder = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className={"details__order"}>
        <button onClick={() => this.handleOrder()}>Place an order</button>
      </div>
    );
  }
}

export { Actions };
