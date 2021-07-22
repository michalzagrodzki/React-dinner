import React from "react";
import { getList } from "./../service/list";
import { Header } from "./../components/Shared/header";
import { ListItems as ItemsList } from "./../components/List/listItems";
import { List as Items } from "./../mockup/list";
import { FormLink } from "./../components/Shared/formLink";
import { LIST as LIST_LABELS } from "./../utils/labels";
import "./../styles/Home.scss";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      listData: [],
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
        <Header
          title={LIST_LABELS.HEADER_LABEL}
          caption={LIST_LABELS.HEADER_CAPTION}
        />
        <ItemsList items={listData} />
        <FormLink
          label={LIST_LABELS.FORM_LINK_LABEL}
          caption={LIST_LABELS.FORM_LINK_CAPTION}
        />
      </div>
    );
  }
}
