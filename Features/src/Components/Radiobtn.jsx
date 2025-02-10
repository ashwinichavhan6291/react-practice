import React, { useState } from "react";

function Radiobtn() {
  let [radio, setRadio] = useState("");
  let [dropDown, setDropDown] = useState("Delhi");

  const handleRadiobtn = (event) => {
    setRadio(event.target.value);
  };

  const handleDropDown = (event) => {
    setDropDown(event.target.value);
  };
  return (
    <>
      <h3>Select Gender : {radio}</h3>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleRadiobtn}
      />
      <label htmlFor="male">male</label>

      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleRadiobtn}
      />
      <label htmlFor="female">female</label>

      <h3>Select City : {dropDown}</h3>

      <select onChange={handleDropDown}>
        <option value="Delhi">Delhi</option>
        <option value="Gurgoan">Gurgoan</option>
        <option value="Mumbai">Mumbai</option>
      </select>
    </>
  );
}

export default Radiobtn;
