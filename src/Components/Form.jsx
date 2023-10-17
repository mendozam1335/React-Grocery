import React, { useState } from "react";
import { nanoid } from "nanoid";
const Form = ({ addItem }) => {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      console.log("no item");
      return;
    }
    const newItem = { name: item, completed: false, id: nanoid() };
    addItem(newItem);
    setItem("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            type="text"
            name="itemInput"
            id="itemInput"
            className="form-input"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="btn">
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
