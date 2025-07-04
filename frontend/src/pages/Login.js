import React from "react";
import Layout from "../components/Layout";
import "../Styles/Login.css";
import shop1 from "./shop1.png";
function Login() {
  return (
    <Layout>
      <div id="s3" style={{ backgroundImage: `url(${shop1})` }}>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="text" placeholder="username" id="f1"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="password" placeholder="password" id="f2"></input>
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
