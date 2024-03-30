import { useState } from "react";

export default function Item({ itemObj, handleDelete, handleCheckbox }) {
  return (
    <li>
      <input type="checkbox" onChange={() => handleCheckbox(itemObj.id)} />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => handleDelete(itemObj.id)}>❌</button>
    </li>
  );
}
