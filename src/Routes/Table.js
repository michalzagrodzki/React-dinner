import React from "react";
import { getList } from "./../service/list";
import { Header } from "./../components/Shared/header";
import { Table as ItemsTable } from "./../components/Table/table";
import { FormLink } from "./../components/Shared/formLink";
import { List as Items } from "./../mockup/list";
import { TABLE as TABLE_LABELS } from "./../utils/labels";
import "./../styles/Table.scss";
export default class Table extends React.Component {
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
          title={TABLE_LABELS.HEADER_LABEL}
          caption={TABLE_LABELS.HEADER_CAPTION}
        />
        <ItemsTable items={listData} />
        <FormLink
          label={TABLE_LABELS.FORM_LINK_LABEL}
          caption={TABLE_LABELS.FORM_LINK_CAPTION}
        />
      </div>
    );
  }
}
