import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Todo() {
  let [val, setVal] = useState("");
  let [data, setData] = useState([]);
  let [togglebtn, setTogglebtn] = useState(true);
  let [editIndex, setEditIndex] = useState(null);

  const saveTodo = (e) => {
    setVal(e.target.value);
  };

  const getData = () => {
    if (editIndex !== null) {
      const updatedTodos = [...data];
      updatedTodos[editIndex] = val;
      setData(updatedTodos);
      setEditIndex(null);
      setTogglebtn(true);
    } else {
      setData([...data, val]);
    }

    setVal("");
  };

  const deleteData = (index) => {
    const filteredData = data.filter((_, id) => id !== index);
    setData(filteredData);
  };

  const editItem = (index) => {
    setVal(data[index]);
    setEditIndex(index);
    setTogglebtn(false);
  };

  return (
    <>
      <h1>Todo List</h1>

      <div className="container">
        <input type="text" name="listData" onChange={saveTodo} value={val} />

        <button onClick={getData}>{togglebtn ? "Add" : "Update"}</button>

        <ul className="list-group">
          {data.map((item, index) => (
            <li className="list-group-item listData" key={index}>
              {item}
              <MdDelete
                className="deleteIcon"
                onClick={() => deleteData(index)}
              />
              <FaEdit className="editIcon" onClick={() => editItem(index)} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
