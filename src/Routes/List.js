import React from "react";
import { getList } from "./../service/list";
import { ListItems } from "./../components/List/listItems";
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
    const { listData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>This is List view</p>
        </header>
        <ListItems items={listData} />
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
      });
    }
  }
}

export default List;
