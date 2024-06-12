const AddTodo = () => {
  return (
    <form>
      <div>
        <label>Add to-do</label>
        <input type="text" placeholder="what are you doing today?" />

        <label>Day & time</label>
        <input type="text" placeholder="Add day & time" />

        <label>Set reminder</label>
        <input type="checkbox" />
      </div>
      <input type="submit" value="Save to-do" />
    </form>
  );
};

export default AddTodo;
