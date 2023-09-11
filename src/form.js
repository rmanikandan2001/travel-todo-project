import React, { useState } from "react";
import "./style.css";

const Form = ({ onAddItems }) => {
  const [qty, setQty] = useState(1);
  const [description, setDescription] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();

    const newItems = {
      description,
      qty,
      packed: false,
      id: Date.now(),
      lengths: true,
    };

    onAddItems(newItems);

    setDescription("");
    setQty(1);
  };

  return (
    <div className="formStyle">
      <form className="formDetails" onSubmit={formSubmit}>
        <p>What you need for your trip?</p>
        <select
          className="qty"
          value={qty}
          onChange={(q) => setQty(Number(q.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>
        <input
          placeholder="Item"
          autoFocus
          required
          className="description"
          type="text"
          value={description}
          onChange={(d) => {
            setDescription(d.target.value);
          }}
        ></input>
        <button className="addBtn">ADD</button>
      </form>
    </div>
  );
};

export default Form
