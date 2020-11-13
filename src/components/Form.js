import React from "react";
import { useHistory } from "react-router-dom";
import Post from "./Post";

export default function Form(props) {
  const { values, setValues, change, submit, disabled, errors, pizza } = props;
  const history = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    if (type === "checkbox") {
      setValues({
        ...values,
        [name]: checked,
      });
    }
    else{
      change(name, value);
    }
    // const correctValue = type === "checkbox" ? checked : value;
    // change(name, correctValue);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-inputs">
        <h1>Build Your Own Pizza</h1>
        <label>
          <span>First Name</span>
          <input
            value={values.fname}
            onChange={onChange}
            name="fname"
            type="text"
          />
        </label>
        <label>
          <span>Last Name</span>
          <input
            value={values.lname}
            onChange={onChange}
            name="lname"
            type="text"
          />
        </label>
        <label>
          <h2>Choice of Size (required)</h2>
          <select value={values.size} onChange={onChange} name="size">
              <option value="">Select a sauce</option>
              <option value="small">Small (14")</option>
              <option value="medium">Medium (16")</option>
              <option value="large">Large (20")</option>
              <option value="extraLarge">Extra Large (24")</option>
          </select>
        </label>
        <div className="sauces">
            <h2>Choice of Sauce (required)</h2>
            <label>Original Red
            <input
                value="originalRed"
                checked={values.sauce === "originalRed"}
                onChange={onChange}
                name="sauce"
                type="radio"
            />
            </label>
            <label>Garlic Ranch
            <input
                value="garlicRanch"
                checked={values.sauce === "garlicRanch"}
                onChange={onChange}
                name="sauce"
                type="radio"
            />
            </label>
            <label>BBQ Sauce
            <input
                value="bbq"
                checked={values.sauce === "bbq"}
                onChange={onChange}
                name="sauce"
                type="radio"
            />
            </label>
            <label>Spinach Alfredo
            <input
                value="spinachAlfredo"
                checked={values.sauce === "spinachAlfredo"}
                onChange={onChange}
                name="sauce"
                type="radio"
            />
            </label>
        </div>
        
        <div className="toppings">
          <h2>Add Toppings</h2>
            <label>Pepperoni
              <input
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
              />
            </label>
            <label>Sausage
              <input
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={onChange}
              />
            </label>
            <label>Spicy Sausage
              <input
                type="checkbox"
                name="spicySausage"
                checked={values.spicySausage}
                onChange={onChange}
              />
            </label>
            <label>Grilled Chicken
              <input
                type="checkbox"
                name="grilledChicen"
                checked={values.grilledChicen}
                onChange={onChange}
              />
            </label>
            <label>Onions
              <input
                type="checkbox"
                name="onions"
                checked={values.onions}
                onChange={onChange}
              />
            </label>
            <label>Green Pepper
              <input
                type="checkbox"
                name="greenPepper"
                checked={values.greenPepper}
                onChange={onChange}
              />
            </label>
            <label>Diced Tomatoes
              <input
                type="checkbox"
                name="dicedTomatoes"
                checked={values.dicedTomatoes}
                onChange={onChange}
              />
            </label>
            <label>Black Olives
              <input
                type="checkbox"
                name="blackOlives"
                checked={values.blackOlives}
                onChange={onChange}
              />
            </label>
            <label>Green Olives
              <input
                type="checkbox"
                name="greenOlives"
                checked={values.greenOlives}
                onChange={onChange}
              />
            </label>
            <label>Roasted Garlic
              <input
                type="checkbox"
                name="roastedGarlic"
                checked={values.roastedGarlic}
                onChange={onChange}
              />
            </label>
            <label>Three Cheese
              <input
                type="checkbox"
                name="threeCheese"
                checked={values.threeCheese}
                onChange={onChange}
              />
            </label>
            <label>Beef
              <input
                type="checkbox"
                name="beef"
                checked={values.beef}
                onChange={onChange}
              />
            </label>
            <label>Giardiniera
              <input
                type="checkbox"
                name="giardiniera"
                checked={values.giardiniera}
                onChange={onChange}
              />
            </label>
            <label>Extra Cheese
              <input
                type="checkbox"
                name="extraCheese"
                checked={values.extraCheese}
                onChange={onChange}
              />
            </label>
        </div>

        <div className="glutenBread">
          <h2>Choice of Substitute</h2>
          <label class="switch"><p>Gluten Free Crust</p>
            <input
              type="checkbox"
              name="glutenFree"
              value={values.glutenFree}
              onChange={onChange}
            />
            <span class="slider"></span>
          </label>
        </div>

        <div className="specialInstructions">
          <h2>Special Instructions</h2>
          <label>
            <input
              value={values.specialInstructions}
              onChange={onChange}
              name="specialInstructions"
              type="text"
            />
          </label>
        </div>

        <div className="amoutofPizzas">
          <label>
            <input
              value={values.amount}
              onChange={onChange}
              name="amount"
              type="number"
              min="1"
              max="10"
            />
          </label>
        </div>
        
            
        <div className="form-submit">
          <button id="submitBtn" disabled={disabled}>submit</button>
            {/* <div onClick={() => history.push(`/confirmation`)}>
              
            </div> */}
          {/* <Link to="/confirmation">
          </Link> */}
          <div className="errors">
            <div>{errors.fname}</div>
            <div>{errors.lname}</div>
            <div>{errors.size}</div>
            <div>{errors.sauce}</div>
          </div>
        </div>
      <Post pizza={pizza} />
      </div>
    </form>
  );
}
