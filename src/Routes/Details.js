import React from "react";
import { withRouter } from "react-router-dom";
import { getDetails } from "./../service/details";
import { Container } from "./../components/Details/container";
import { Item } from "./../mockup/item";
import "./../styles/Home.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      item: null,
    };
  }
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>This is Details view</p>
          <Container item={item} />
        </header>
      </div>
    );
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
        item: Item,
      });
    }
  }
}

export default withRouter(Details);
