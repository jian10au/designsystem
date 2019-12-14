import { Fonts } from "./fonts";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Design tokens", module).add("Fonts", () => (
  <div>
    <h1>Fonts</h1>
    <p></p>
    <div style={{ fontSize: Fonts.large }}>Heading uses large font</div>
    <div style={{ fontSize: Fonts.medium }}>Sub-Heading uses medium font</div>
    <div>Body text uses default font</div>
    <div style={{ fontSize: Fonts.small }}>Footer Text uses the small font</div>
  </div>
));
