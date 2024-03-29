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
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    const item = {
      id: Date.now(),
      description: e.target[1].value,
      quantity: e.target[0].value,
      packed: false,
    };
    setItems([...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleSubmit={handleSubmit} />
      <PackingList newItem={items} />
      <Stats />
    </div>
  );
}

export default App;
