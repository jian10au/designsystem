import { Colors } from "./colors";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Design tokens", module).add("Fonts", () => (
  <div>
    <h1>Fonts</h1>
    <p></p>
    <div>Heading</div>
    <div
      style={{ backgroundColor: Colors.hotRed, width: 10, heigth: 10 }}
    ></div>
  </div>
));
