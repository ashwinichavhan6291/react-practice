import React from "react";
import { useState } from "react";

function SearchText() {
  let [text, setText] = useState("");
  const Country = [
    "Angola",
    "Antigua",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican",
    "Eritrea",
    "Estonia",
    "Eswatini",
  ];
  return (
    <>
      <hr />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {Country.filter((item) => {
        if (text === "") {
          return item;
        } else if (item.toLowerCase().startsWith(text.toLowerCase())) {
          return item;
        }
      }).map((val) => {
        
      return  <li key={val}>{val}</li>;
      })}
    </>
  );
}

export default SearchText;
