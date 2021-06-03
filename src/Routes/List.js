import React from "react";
import { getList } from "./../service/list";
import "./../styles/Home.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listData: null,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>This is List view</p>
        </header>
      </div>
    );
  }

  async componentDidMount() {
    try {
      const listData = await getList();

      this.setState({
        ...this.state,
        ...{
          isLoading: false,
          listData,
        },
      });
    } catch (error) {
      console.log(`Axios request failed: ${error}`);
    } finally {
      this.setState({
        ...this.state,
        ...{
          isLoading: false,
        },
      });
    }
  }
}

export default List;
