import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
  
    const routeToShop = () => {
      console.log(history, "HISTORY");
      history.push("/pizza");
    };
  
    return (
      <div className="home-wrapper">
        <h1>Lambda Eats!</h1>
        <button onClick={routeToShop} className="md-button shop-button">
          Order a Pizza!
        </button>
      </div>
    );
  }
  