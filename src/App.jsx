import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Items from "./Components/Items";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((oldItems) => {
      const updatedItems = [...oldItems, item];
      updateStorage(updatedItems);
      return updatedItems;
    });
    toast.success("Item added");
  };
  const removeItem = (id) => {
    setItems((oldItems) => {
      const updatedItems = oldItems.filter((item) => item.id !== id);
      updateStorage(updatedItems);
      return updatedItems;
    });
    toast.success("Item Removed");
  };
  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    updateStorage(newItems);
  };
  const updateStorage = (updatedItems) => {
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")) || []);
  }, []);

  return (
    <main>
      <section className="section-center">
        <Form addItem={addItem} toast={toast} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
