import React from "react";
import "../Styles/Footer.css";
import keep from "./keep.png";
function Footer() {
  return (
    <div className="con">
      <h3 className="d1">Experience shoping on modile</h3>
      <h4 className="c5">Keep in Touch</h4>
      <div>
        <li>
          <a href="">
            <img src={keep} className="s9"></img>
          </a>
        </li>
      </div>
      <div className="v1">
        <h7 className="vi">popular searches</h7>
        <p>
          shirts|skrits|teens|Trousers|jeeans|Biba|kurtas|faceoils|facecream|facewash|serum|shampoo|{" "}
          <a href="">contact us</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
