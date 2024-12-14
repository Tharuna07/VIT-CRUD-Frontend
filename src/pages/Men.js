import React from "react";
import Layout from "../components/Layout";
import axios from "axios";
import deal from "../components/deal.png";
import "../Styles/Men.css";

const Men = () => {
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
      <div className="container">
        <div>
          <li>
            <a href="">
              <img src={deal}></img>
            </a>
          </li>
        </div>
        <div className="con1">
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
    name: "Rigo",
    img: "/students/polo1.png",
    review: "Polo Collar Waffle Knit Cotton T-shirt",
    price: 789,
  },
  {
    name: "Puma",
    img: "/students/Puma.png",
    review: "Ess Polo T-shirt",
    price: 899,
  },
  {
    name: "Wrong",
    img: "/students/wrong.png",
    review: "Men Navy Blue Slim Fit Solid Casual Shirt",
    price: 999,
  },
  {
    name: "Roadster",
    img: "/students/Road.png",
    review: "Men Navy Blue Magenta Pink Regular Fit Checked Casual Shirt",
    price: 664,
  },
];

export default Men;
