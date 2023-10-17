import { useState } from "react";
import Form from "./Components/Form";

const App = () => {
  const [items, setItems] = useState([]);
  return (
    <main>
      <Form />
    </main>
  );
};

export default App;
