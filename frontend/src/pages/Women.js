import React from "react";
import Layout from "../components/Layout";
import women from "../components/women.png";
import axios from "axios";
import "../Styles/Women.css";

const Women = () => {
  const handleSubmit = (event, product) => {
    event.preventDefault();
    const { name, img, review, price } = product;
    const inputObj1 = { name, img, review, price };
    const url = "https://vit-crud-backendd-1.onrender.com/products/cartItems";

    axios
      .post(url, inputObj1)
      .then((res) => {
        if (res.status === 201) {
          alert("Product Added to Cart Successfully");
        } else {
          alert("Product Not Added to Cart Successfully");
          return Promise.reject();
        }
      })
      .catch((err) => {
        console.error("Error adding product to cart:", err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <Layout>
      <div className="container1">
        <div>
          <li>
            <a href="/Cart">
              <img src={women} id="c2" alt="women"></img>
            </a>
          </li>
        </div>
        <div className="con2">
          {data.map((d) => (
            <div key={d.name}>
              <div>
                <img
                  id="s6"
                  src={d.img}
                  alt={d.name}
                  className="cart-item-image"
                ></img>
              </div>
              <div>
                <p>{d.name}</p>
                <p>{d.review}</p>
                <p>{d.price}</p>
                <button onClick={(e) => handleSubmit(e, d)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const data = [
  {
    name: "Fablestreet",
    img: "/students/fable.png",
    review: "Floral Satin Formal A-Line Midi Dress",
    price: 2999,
  },
  {
    name: "Anouk",
    img: "/students/anouk.png",
    review: "Floral Print Fit & Flare Midi Dress",
    price: 799,
  },
  {
    name: "Blissclub",
    img: "/students/blissclub.png",
    review: "Women Peg Leg Loose Fit High Rise",
    price: 1599,
  },
  {
    name: "Kotty",
    img: "/students/kotty.png",
    review: "Women Black Relaxed Straight Fit High-Rise Trousers",
    price: 599,
  },
];

export default Women;
