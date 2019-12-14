import { Fonts } from "./fonts";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Design tokens", module).add("Fonts", () => (
  <div>
    <h1>Fonts</h1>
    <p></p>
    <div style={{ fontFamily: Fonts.headingFont, fontSize: 20 }}>Heading</div>
    <div style={{ fontFamily: Fonts.headingFont, fontSize: 16 }}>
      Sub-Heading
    </div>
    <div style={{ fontFamily: Fonts.bodyFont, fontSize: Fonts.bodySize }}>
      Body
    </div>
    <div
      style={{
        fontFamily: Fonts.bodyFont,
        fontSize: Fonts.bodySize,
        fontStyle: "italic"
      }}
    >
      Reference
    </div>
  </div>
));
