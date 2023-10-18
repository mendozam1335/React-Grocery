import React, { useState } from "react";

const SingleItem = ({ id, name, completed, removeItem, editItem }) => {
  return (
    <article className="single-item">
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={completed}
        onChange={() => editItem(id)}
      />
      <label htmlFor={id}>
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: completed && "line-through",
          }}
        >
          {name}
        </p>
      </label>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        Remove Item
      </button>
    </article>
  );
};

export default SingleItem;
