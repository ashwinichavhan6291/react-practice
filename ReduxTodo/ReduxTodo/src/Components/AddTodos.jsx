import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { addTodo, removeTodo, updateTodo } from "../features/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

function AddTodos() {
  let [input, setInput] = useState("");
  let [editId, setEditId] = useState(null);
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
  }, []);

  const handleAdd = () => {
    if (editId) {
      dispatch(updateTodo({ id: editId, text: input }));
      setEditId(null);
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleEdit = (id) => {
    const todoEdit = todos.find((todo) => todo.id === id);
    if (todoEdit) {
      setInput(todoEdit.text);
      setEditId(id);
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
          {editId ? "Update" : "Add"}
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
              <MdEditDocument
                className="edit"
                onClick={() => handleEdit(todo.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddTodos;
