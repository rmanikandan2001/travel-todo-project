import React, { useState } from "react";
import Logo from "./header.js";
import Form from "./form.js";
import List from "./list.js";
import Stats from "./stats.js";
import "./style.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [itemsData, setItemsData] = useState([]);

  const addItems = (item) => {
    setItems((items) => [...items, item]);
    setItemsData((itemsData) => [...items, item]);
  };
  return (
    <div className="container">
      <div className="content">
        <Logo />
        <Form onAddItems={addItems} />
        <List
          items={items}
          setItems={setItems}
          itemsData={itemsData}
          setItemsData={setItemsData}
        />
        <Stats items={items} />
      </div>
    </div>
  );
};

export default App