import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserListing } from "../store/userSlice";

const InputDetails = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    // hexCode: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email, userName } = userData;

    const missingField = !email
      ? "Email"
      : !userName
      ? "Username"
      : null;

    if (missingField) {
      return alert(`Please enter ${missingField} !`);
    }
    console.log(userData);
    if (!emailRegex.test(userData.email)) {
      return alert("Invalid email format");
    } else {
      dispatch(setUserListing(userData));
    }
  };

  return (
    <section className="input-details__container">
      <div className="heading">
        Join <span>Unique Schools</span>
      </div>
      <div className="input__fields">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="userName"
          onChange={handleChange}
        />
        {/* <input
          type="text"
          placeholder="16 digit hex code"
          name="hexCode"
          onChange={handleChange}
        /> */}
      </div>
      <button onClick={addUser}>Join</button>
    </section>
  );
};

export default InputDetails;
