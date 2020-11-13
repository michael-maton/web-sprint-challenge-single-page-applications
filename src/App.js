import React, { useState, useEffect } from "react";
import "./App.css";
import * as yup from "yup";
import axios from "axios";
import Form from "./components/Form";
import { initialFormValues } from "./initial_values/initialFormValues";
import schema from "./validation/formSchema";
import { Route, Link } from "react-router-dom";
import Post from "./components/Post";

import Home from "./Home";
import Confirmation from "./Confirmation.js";

const initialFormErrors = {
  fname: "",
  lname: "",
  size: "",
  sauce: "",
  specialInstructions: "",
  amount: "",
};
const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [pizza, setPizza] = useState([]);

  const sendPizza = (newPizza) => {
    axios.post("https://reqres.in/api/pizzas", newPizza)
    .then((res) => {
      debugger;
      console.log(res.data);
      setPizza(res.data);
      setFormValues(initialFormValues);
    })
    .catch((err) => {console.log(err)});
  };

  const inputChange = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newPizza = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      specialInstructions: formValues.specialInstructions.trim(),
      amount: formValues.amount,
      toppings: ["pepperoni", "sausage", "spicySausage", "grilledChicen", "onions", "greenPepper", "dicedTomatoes", "blackOlives", "greenOlives", "roastedGarlic", "threeCheese", "beef", "giardiniera", "extraCheese"].filter((top) => formValues[top]),
      glutenFree: formValues.glutenFree,
    };
    sendPizza(newPizza);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  useEffect(() => {
    console.log(pizza);
  }, [pizza]);

  return (
    <div className="wrapper">
      <section className="header">
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/pizza">Order a Pizza!</Link>
          </div>
        </nav>
      </section>
      <div className="container">

      <Route path="/pizza">
        <Form
          values={formValues}
          setValues={setFormValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          pizza={pizza}
        />
      </Route>
      <Route exact path="/confirmation">
        <Confirmation pizza={pizza} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      </div>
      {/* <Post pizza={pizza} /> */}
    </div>
  );
};
export default App;
