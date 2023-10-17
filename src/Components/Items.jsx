import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items }) => {
  return (
    <article className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </article>
  );
};

export default Items;
