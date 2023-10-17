import React, { useState } from "react";

const Form = () => {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      console.log("no item");
      return;
    }
  };
  return (
    <section className="section-center">
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