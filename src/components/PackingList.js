import Item from "./Item";
import { useState } from "react";
export default function PackingList(props) {
  const [sortBy, setSortBy] = useState("input");
  const items = [...props.newItem];

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((i) => (
          <Item
            itemObj={i}
            key={i.id}
            handleDelete={props.handleDelete}
            handleCheckbox={props.handleCheckbox}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Stats</option>
        </select>
        <button onClick={props.handleDeleteList}>Clear List</button>
      </div>
    </div>
  );
}
