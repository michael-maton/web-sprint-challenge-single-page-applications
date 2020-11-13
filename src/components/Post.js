import React from "react";

export default function Post(props) {
  const { pizza } = props;
  let pizzaStr = JSON.stringify(pizza);
  return (
    <div className="post-requests">
        <h3>New pizza:</h3>
        <div className="scroll">
            <pre id="newPizza">{pizzaStr}</pre>
        </div>
    </div>
  );
}
