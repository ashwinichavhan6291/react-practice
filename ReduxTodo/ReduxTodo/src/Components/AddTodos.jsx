import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { addTodo, removeTodo } from "../features/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

function AddTodos() {
  let [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo?.todos || []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach((todo) => {
      dispatch(addTodo(todo.text));
    });
  }, [dispatch]);

  const handleAdd = () => {
    if (input === "") {
      alert("Please Add Something");
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="container">
      <div className="inputContainer">
        <input
          className="form-control form-control-lg"
          type="text"
          value={input}
          placeholder="Enter Data"
          aria-label=".form-control-lg example"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit" onClick={handleAdd} className="btn btn-dark  btn">
          Add
        </button>
      </div>
      <div className="listData">
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              {todo.text}

              <FaTrash
                className="delete"
                onClick={() => handleRemoveTodo(todo.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddTodos;
