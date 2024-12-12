import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

// Components
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let results = await axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
      });
      setProducts(results.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    console.log("useEffect jalan");
  }, []);

  return (
    <>
      <div className="container">
        <h1>Satu Jam Belajar</h1>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return <Card key={product.id} product={product}></Card>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
