import { boolean, number, select, text, withKnobs } from "@storybook/addon-knobs";

import Button from './Button';
import Colors from '../../design-tokens/colors';
import React from 'react';

export default { title: 'Button', decorators: [withKnobs] };
  

export const withText = () => 
 <div style={{ display: 'inline-block', backgroundColor: select('Color',  ['red', 'blue', 'yellow'], 'red', null) }}>
    <Button>
        {
            text("Text", "Click me")
        }</Button>
</div>;