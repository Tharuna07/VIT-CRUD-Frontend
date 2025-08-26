import React, { useState } from "react";
import Layout from "../components/Layout";
import "../Styles/Signup.css";
import axios from "axios";
import shop1 from "./shop1.png";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phno, setPhoneno] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputObj = { username, email, password, address, phno };
    const url = "https://vit-crud-backendd-1.onrender.com/users/createuser";
    axios
      .post(url, inputObj)
      .then((res) => {
        if (res.status === 200) {
          alert("User Created Successfully");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div id="s3" style={{ backgroundImage: `url(${shop1})` }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="PhoneNo"
            onChange={(e) => setPhoneno(e.target.value)}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
