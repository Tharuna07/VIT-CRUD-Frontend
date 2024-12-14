import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../Styles/Cart.css";
import axios from "axios";
import shop2 from "./shop2.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://vit-crud-backendd-1.onrender.com/products/cartItems"
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setError("Failed to fetch cart items");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (itemId) => {
    axios
      .delete(
        `https://vit-crud-backendd-1.onrender.com/products/cartItems/${itemId}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("item deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div id="s3" style={{ backgroundImage: `url(${shop2})` }}>
          {isLoading ? (
            <p>Loading cart items...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Review</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.img}
                        alt={item.name}
                        width="50"
                        height="60"
                        className="cart-item-image"
                      />
                    </td>
                    <td>{item.review}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => handleDelete(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
