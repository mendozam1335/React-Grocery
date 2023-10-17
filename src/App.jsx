import { useState } from "react";
import Form from "./Components/Form";
import Items from "./Components/Items";

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main>
      <section className="section-center">
        <Form addItem={addItem} />
        <Items items={items} />
      </section>
    </main>
  );
};

export default App;
