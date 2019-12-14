import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

import React from 'react';
import Input from './Input'
import { unit } from "../../style-constants";

export default { title: 'Input Fields', decorators: [withKnobs] };

export const withText = () => <div style={{display: 'inline-block', width: unit(13.5)}}>
    <Input type="text">>{text("Text", "Click me")}</Input>
</div>;