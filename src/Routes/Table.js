import React from "react";
import { getList } from "./../service/list";
import { Table as ItemsTable } from "./../components/Table/table";
import { List as Items } from "./../mockup/list";
import "./../styles/Home.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listData: null,
    };
  }

  render() {
    const { listData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>This is table view</p>
          <ItemsTable items={listData} />
        </header>
      </div>
    );
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
}

export default Table;
