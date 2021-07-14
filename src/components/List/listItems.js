import React from "react";
import PropTypes from "prop-types";
import { Header } from "./listHeader";
import { ListSwitch as Switch } from "./../Shared/listSwitch";
import { ListLink } from "./listLink";
import { Item } from "./item";
import { LIST as LIST_LABELS } from "./../utils/labels";

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
      {popular ? (
        <Header label={LIST_LABELS.SUB_HEADER_LABEL} />
      ) : (
        <Switch list />
      )}
      {items.map((item, index) => (
        <li key={index}>
          <Item item={item} />
        </li>
      ))}
      {link ? <ListLink label={LIST_LABELS.LINK_LABEL} /> : null}
    </ul>
  );
};

export { ListItems };
