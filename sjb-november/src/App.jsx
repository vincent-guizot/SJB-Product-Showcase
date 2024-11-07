import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import axios from "axios";

// Components
import Profile from "./components/Profile";
import ProductCard from "./components/ProductCard";

function App() {
  // const [profiles, setProfiles] = useState([
  //   {
  //     id:1,
  //     name: "Vincent",
  //     hobby: "Coding"
  //   },
  //   {
  //     id:2,
  //     name: "Ncent",
  //     hobby: "Gaming"
  //   },
  //   {
  //     id:3,
  //     name: "Admin",
  //     hobby: "Fishing"
  //   }
  // ]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const results = await axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
      });
      console.log(results.data)
      setProducts(results.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>SJB November</h1>
      <hr />
      {/* {
        profiles.map(profile => {
          const {id} = profile
          return(
            <Profile key={id} profile={profile}></Profile>
          )
        })
      } */}
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product}></ProductCard>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
