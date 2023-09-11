
import React, { useState } from "react";

const List = ({ items, setItems, itemsData, setItemsData }) => {
  let forSortItems = (value) => {
    if (value === 1) {
      let itemDescription = itemsData.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else if (a.id < b.id) {
          return -1;
        } else {
          return 0;
        }
      });

      setItems([...itemDescription]);
    } else if (value === 2) {
      let itemsPacked = itemsData.sort((a, b) => {
        if (a.packed > b.packed) {
          return -1;
        } else if (a.packed < b.packed) {
          return 1;
        } else {
          return 0;
        }
      });

      setItems([...itemsPacked]);
    } else if (value === 3) {
      let qtyItems = itemsData.sort((a, b) => {
        if (a.qty > b.qty) {
          return 1;
        } else if (a.qty < b.qty) {
          return -1;
        } else {
          return 0;
        }
      });
      setItems([...qtyItems]);
    }
  };

  let checkboxFunc = (id) => {
    let newItems = [...itemsData];
    setItems(newItems);
    setItemsData(newItems);
  };

  let itemClose = (id) => {
    setItemsData((SetData) => itemsData.filter((value) => value.id !== id));
    setItems((items) => items.filter((value) => value.id !== id));
  };

  return (
    <div className="listStyle">
      <div className="itemBtn">
        <select
          className="sortBtn"
          onClick={(s) => forSortItems(Number(s.target.value))}
        >
          <option value={1}>Sory by Add</option>
          <option value={2}>Sort by Packed</option>
          <option value={3}>Sort by Quantity</option>
        </select>
        <button
          className="clearBtn"
          onClick={() => {
            setItems((items = []));
            setItemsData((itemsData = []));
          }}
        >
          CLEAR ITEMS
        </button>
      </div>
      <ul className="addList">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            check={checkboxFunc}
            close={itemClose}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, check, close }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {isOpen && (
        <li className="listItems">
          <input
            className="itemCheckBox"
            type="checkbox"
            onClick={() => {
              check();
              setChecked(!checked);
              item.packed = !item.packed;
            }}
          ></input>
          <span
            style={
              item.packed
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
            className="itemsStyle"
          >
            {item.qty} {item.description}{" "}
          </span>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              item.packed = item.packed ? !item.packed : item.packed;
              close(item.id);
            }}
            className="closeBtn"
          >
            &times;
          </button>
        </li>
      )}
    </div>
  );
};

export default List;