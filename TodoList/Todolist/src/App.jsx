import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
function App() {
  let [item, setItem] = useState("");
  let [val, setVal] = useState([]);
  let [isEditId, setEditId] = useState(null);





  useEffect(()=>{
    if(val.length>0) {
    localStorage.setItem("items",JSON.stringify(val));
    }
  },[val])

  useEffect(()=>{
const items=JSON.parse(localStorage.getItem('items'));

if(items){
  setVal(items);
}
  },[])

  const handleOnChange = (e) => {
    setItem(e.target.value);
  };
  const getValue = () => {
    if (isEditId !== null) {
      const update = [...val];
      update[isEditId] = item;
      setVal(update);
      setEditId(null);
    } else {
      const Data = [...val, item];
      setVal(Data);
    }
    setItem("");
  };

  const deleteData = (index) => {
    const deleteItem = val.filter((_, id) => id !== index);
    console.log(deleteItem);
    setVal(deleteItem);
  };

  const editData = (index) => {
    setItem(val[index]);
    setEditId(index);
  };
  return (
    <>
      <div className="input-group mb-3 inputContainer">
        <input
          type="text"
          className="form-control "
          placeholder="Enter Data"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={item}
          onChange={handleOnChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={getValue}
        >
          {!isEditId ? "Add" : "Update"}
        </button>
      </div>

      <div className="list">
        {val.map((data, index) => (
          <li className="list-group-item" key={index}>
            {data}

            <button
              type="button"
              className="btn btn-info delete"
              onClick={() => deleteData(index)}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-info delete"
              onClick={() => editData(index)}
            >
              Edit
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
