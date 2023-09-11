
import React from "react";
import "./style.css";

const Stats = ({ items }) => {
  let numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  let packed = Math.round((numPacked / numItems) * 100);
  console.log(numItems);
  return (
    <div className="footer">
      <footer className="">
        <p className="status">
          {packed === 100 ? (
            <p>you got everything ready to go </p>
          ) : (
            <p>{`you have ${numItems} items on your list,and you already packed ${numPacked} ${packed}% items`}</p>
          )}
        </p>
      </footer>
    </div>
  );
};

export default Stats;