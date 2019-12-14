import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

import Button from './Button';
import React from 'react';
import { unit } from "../../style-constants";

export default { title: 'Button', decorators: [withKnobs] };

export const withText = () => <div style={{display: 'inline-block', width: unit(13.5)}}>
    <Button>{text("Text", "Click me")}</Button>
</div>;