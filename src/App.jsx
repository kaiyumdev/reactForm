import { useState } from "react";

function App() {
  let [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const inputOnChange = (property, value) => {
    setFormObj((preObj) => ({
      ...preObj,
      [property]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
  };
  return (
    <>
      <div className="container">
        <form onSubmit={formSubmit}>
          <input
            onChange={(e) => {
              inputOnChange("fName", e.target.value);
            }}
            value={formObj.fName}
            placeholder="First Name"
            type="text"
          />
          <br />
          <input
            onChange={(e) => {
              inputOnChange("lName", e.target.value);
            }}
            value={formObj.lName}
            placeholder="Last Name"
            type="text"
          />
          <br />
          <select
            onChange={(e) => {
              inputOnChange("city", e.target.value);
            }}
            value={formObj.city}
          >
            <option value="">Choose City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rangpur">Rangpur</option>
          </select>
          <input
            onChange={() => {
              inputOnChange("gender", "Male");
            }}
            checked={formObj.gender === "Male"}
            type="radio"
            name="gender"
          />
          Male
          <input
            onChange={() => {
              inputOnChange("gender", "Female");
            }}
            checked={formObj.gender === "Female"}
            type="radio"
            name="gender"
          />
          Female
          <br />
          <button type="Submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
