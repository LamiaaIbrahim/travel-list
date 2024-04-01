import "./App.css";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Logo from "./components/logo";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const userInputItem = e.target[1].value;
    if (userInputItem.trim() === "") {
      alert("Empty Item,Please add an Item...");
      return;
    }
    const item = {
      id: Date.now(),
      description: e.target[1].value,
      quantity: e.target[0].value,
      packed: false,
    };
    setItems([item, ...items]);
  }
  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleCheckbox(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  }
  function handleDeleteList() {
    setItems(() => []);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleSubmit={handleSubmit} />
      <PackingList
        newItem={items}
        handleDelete={handleDeleteClick}
        handleCheckbox={handleCheckbox}
        handleDeleteList={handleDeleteList}
      />

      <Stats items={items} />
    </div>
  );
}

export default App;
