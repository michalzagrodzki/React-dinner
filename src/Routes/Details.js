import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Header } from "./../components/Shared/header";
import { getDetails } from "./../service/details";
import { Container } from "./../components/Details/container";
import { postOrder } from "./../service/orders";
// import { Item } from "./../mockup/item";
import { DETAILS } from "./../utils/labels";
import "./../styles/Details.scss";

class Details extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      item: null,
    };
  }

  async componentDidMount() {
    try {
      const payload = {
        id: this.props.match.params.id,
      };
      const response = await getDetails(payload);

      this.setState({
        item: response.data,
      });
    } catch (error) {
      console.log(`Axios request failed: ${error}`);
    } finally {
      this.setState({
        isLoading: false,
        // item: Item,
      });
    }
  }

  async handleAction() {
    const {
      title,
      // eslint-disable-next-line camelcase
      _id: dinner_id,
      price,
      calories,
      weight,
      ingredients,
    } = this.state.item;
    await postOrder({
      title,
      // eslint-disable-next-line camelcase
      dinner_id,
      price,
      calories,
      weight,
      ingredients,
    });
  }

  render() {
    const { item } = this.state;
    return (
      <div className="app__container">
        <Header title={DETAILS.HEADER_LABEL} />
        <Container item={item} onClick={(event) => this.handleAction(event)} />
      </div>
    );
  }
}

export default withRouter(Details);
