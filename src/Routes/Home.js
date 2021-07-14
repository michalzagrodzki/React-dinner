import React from "react";
import { Header } from "./../components/Shared/header";
import { getList } from "./../service/list";
import { Logo } from "./../components/Shared/logo";
import { ListItems as ItemsList } from "./../components/List/listItems";
import { FormLink } from "./../components/Shared/formLink";
// import { List as Items } from "./../mockup/list";
import { HOME } from "./../utils/labels";
import "./../styles/Home.scss";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      list: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getList();
      const shortResponse = response.data.slice(0, 2);
      this.setState({
        list: shortResponse,
      });
    } catch (error) {
      // console.log(`Axios request failed: ${error}`);
    } finally {
      this.setState({
        isLoading: false,
        // list: Items.slice(0, 3),
      });
    }
  }

  render() {
    const { list } = this.state;
    return (
      <div className="app__container">
        <Logo />
        <Header home title={HOME.HEADER_LABEL} caption={HOME.HEADER_CAPTION} />
        <ItemsList popular link items={list} />
        <FormLink
          label={HOME.FORM_LINK_LABEL}
          caption={HOME.FORM_LINK_CAPTION}
        />
      </div>
    );
  }
}

export default Home;
