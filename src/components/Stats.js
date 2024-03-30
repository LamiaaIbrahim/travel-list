export default function Stats(props) {
  const listItems = props.items;
  const numPacked = props.items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / listItems.length) * 100);

  if (listItems.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  } else {
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : ` 💼 You have ${listItems.length} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }
}
