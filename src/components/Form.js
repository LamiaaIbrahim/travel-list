export default function Form(props) {
  return (
    <>
      <form className="add-form" onSubmit={props.handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="item.."></input>
        <button>Add</button>
      </form>
    </>
  );
}
