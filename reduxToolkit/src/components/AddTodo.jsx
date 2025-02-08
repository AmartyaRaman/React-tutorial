import React from 'react';

const AddTodo = () => {
  return (
    <div>
      <h2>Add Todo</h2>
      <form>
        <input type="text" placeholder="Enter todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;