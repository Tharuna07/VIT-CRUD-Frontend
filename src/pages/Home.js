import React from "react";
import Layout from "../components/Layout";
import img11 from "../components/img11.jpeg";
import "../Styles/Home.css";

function Home() {
  return (
    <Layout>
      <div>
        <li>
          <img src={img11} alt="Main" />
        </li>
      </div>
      <div className="link">
        <h1>Popular brands</h1>
      </div>
      <div className="link1">
        {data1.map((d, index) => (
          <div key={index}>
            <img src={d.img} alt={`Brand ${index}`} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

const data1 = [
  {
    img: "/students/allen.png",
  },
  {
    img: "/students/levi.png",
  },
  {
    img: "/students/adidas.png",
  },
  {
    img: "/students/zara.png",
  },
  {
    img: "/students/manyavar.png",
  },
  {
    img: "/students/ray.png",
  },
];

export default Home;
