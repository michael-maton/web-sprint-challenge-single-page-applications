import React from "react";
import { useHistory } from "react-router-dom";
import Post from "./components/Post.js";

export default function Confirmation(props) {
    const { pizza } = props;
    const history = useHistory();
  
    const routeToHome = () => {
      console.log(history, "HISTORY");
      history.push("/");
    };
  
    return (
      <div className="confirmation-wrapper">
        <h1>Your Pizza is on the Way!</h1>
        <Post pizza={pizza} />
        <button onClick={routeToHome} className="md-button shop-button">
          Return to Home
        </button>
      </div>
    );
  }
  