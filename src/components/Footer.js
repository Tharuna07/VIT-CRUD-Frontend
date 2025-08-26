import React from "react";
import "../Styles/Footer.css";
import keep from "./keep.png";

function Footer() {
  return (
    <div className="con">
      <h3 className="d1">Experience shopping on mobile</h3>
      <h4 className="c5">Keep in Touch</h4>

      {/* Fixed anchor tag and added alt */}
      <div>
        <li>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={keep} className="s9" alt="Stay connected" />
          </a>
        </li>
      </div>

      <div className="v1">
        <h6 className="vi">Popular Searches</h6>
        <p>
          shirts | skirts | teens | trousers | jeans | Biba | kurtas | face oils
          | face cream | face wash | serum | shampoo | {/* Fixed anchor tag */}
          <a href="/contact">Contact Us</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
