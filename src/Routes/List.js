import React from "react";
import { getList } from "./../service/list";
import { Header } from "./../components/Shared/header";
import { ListItems as ItemsList } from "./../components/List/listItems";
import { List as Items } from "./../mockup/list";
import "./../styles/Home.scss";

const HEADER_LABEL = "Dinners";
const HEADER_CAPTION = "list view";

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
      <div className="app__container">
        <Header title={HEADER_LABEL} caption={HEADER_CAPTION} />
        <ItemsList items={listData} />
      </div>
    );
  }
}

export default List;
