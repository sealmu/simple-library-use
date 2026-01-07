import React from "react";
import { Button, Shape } from "@mprestcom/simple-ui-library";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Simple UI Library Demo</h1>
      <Button text="Click Me" color="blue" size="medium" onClick={() => alert("Hello!")} />
      <div style={{ marginTop: 20 }}>
        <Shape type="circle" color="red" />
        <Shape type="triangle" color="green" />
        <Shape type="star" color="gold" />
      </div>
    </div>
  );
}