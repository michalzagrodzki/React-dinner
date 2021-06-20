import React from "react";
import PropTypes from "prop-types";
import { Header } from "./listHeader";
import { ListLink } from "./listLink";
import { Item } from "./item";

const HEADER_LABEL = "Most popular dinners:";
const LINK_LABEL = "View all dinners";

const ListItems = (props) => {
  ListItems.propTypes = {
    items: PropTypes.array.isRequired,
    popular: PropTypes.bool,
    link: PropTypes.bool,
  };
  const { items, popular, link } = props;
  if (!items) {
    return null;
  }
  return (
    <ul className={"list__container"}>
      {popular ? <Header label={HEADER_LABEL} /> : null}
      {items.map((item, index) => (
        <li key={index}>
          <Item item={item} />
        </li>
      ))}
      {link ? <ListLink label={LINK_LABEL} /> : null}
    </ul>
  );
};

export { ListItems };
