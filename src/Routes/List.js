import React from "react";
import { getList } from "./../service/list";
import { ListItems as ItemsList } from "./../components/List/listItems";
import { List as Items } from "./../mockup/list";
import "./../styles/Home.scss";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      listData: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await getList();

      this.setState({
        listData: response.data,
      });
    } catch (error) {
      console.log(`Axios request failed: ${error}`);
    } finally {
      this.setState({
        isLoading: false,
        listData: Items,
      });
    }
  }

  render() {
    const { listData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>This is List view</p>
          <ItemsList items={listData} />
        </header>
      </div>
    );
  }
}

export default List;
