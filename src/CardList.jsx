import React from "react";
import Card from "./Card";
// import { users } from "./users";

const CardList = ({ friends }) => {
  const list = friends.map((friend, i) => {
    return <Card user={friend} key={i} />;
  });
  return <div>{list}</div>;
};
export default CardList;
