import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

import Card from './Card';
import React from 'react';
import { unit } from "../../style-constants";

export default { title: 'Card', decorators: [withKnobs] };

export const withText = () => <div style={{display: 'inline-block', width: unit(13.5)}}>
    <Card>{text("Content changed", "This is my card!")}</Card>
</div>;