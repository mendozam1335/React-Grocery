import { useState } from "react";
import Form from "./Components/Form";

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main>
      <Form addItem={addItem} />
    </main>
  );
};

export default App;
