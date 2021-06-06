import React from "react";
import { Link } from "react-router-dom";
import { getList } from "./../service/list";
import { ListItems as ItemsList } from "./../components/List/listItems";
import { List as Items } from "./../mockup/list";
import logo from "./../assets/logo.svg";
import "./../styles/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      list: null,
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React dinner app.</p>
          <ItemsList items={list} />
          <Link
            to={{
              pathname: "/form",
            }}
          >
            Link to form
          </Link>
        </header>
      </div>
    );
  }

  async componentDidMount() {
    try {
      const response = await getList();
      const shortResponse = response.data.slice(0, 2);
      this.setState({
        list: shortResponse,
      });
    } catch (error) {
      console.log(`Axios request failed: ${error}`);
    } finally {
      this.setState({
        isLoading: false,
        list: Items.slice(0, 3),
      });
    }
  }
}

export default Home;
