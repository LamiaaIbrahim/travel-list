import Item from "./Item";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function PackingList(props) {
  //   const items =
  //     Object.keys(props.newItem).length === 0
  //       ? initialItems
  //       : [...initialItems, ...props.newItem];
  const items = [...props.newItem];
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Item
            itemObj={i}
            key={i.id}
            handleDelete={props.handleDelete}
            handleCheckbox={props.handleCheckbox}
          />
        ))}
      </ul>
    </div>
  );
}
