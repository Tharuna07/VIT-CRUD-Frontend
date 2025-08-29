import React, { useState } from "react";
import Layout from "../components/Layout";
import "../Styles/Login.css";
import shop1 from "./shop1.png";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please enter username");
      return;
    }
    // In a real app, verify credentials via backend. For now, store username as userId
    localStorage.setItem("userId", username.trim());
    alert(`Logged in as ${username}`);
  };

  return (
    <Layout>
      <div id="s3" style={{ backgroundImage: `url(${shop1})` }}>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="username"
                    id="f1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    placeholder="password"
                    id="f2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="login" id="f3"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
