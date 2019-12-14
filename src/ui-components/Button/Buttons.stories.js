import { boolean, number, select, text, withKnobs } from "@storybook/addon-knobs";

import Button from './Button';
import Colors from '../../design-tokens/colors';
import React from 'react';

export default { title: 'Button', decorators: [withKnobs] };
  

<<<<<<< HEAD
export const withText = () => <div style={{display: 'inline-block', width: unit(13.5)}}>
    <Button iconSrc="">
        {text("Text", "Click me")}
    </Button>
=======
export const withText = () => 
 <div style={{ display: 'inline-block', backgroundColor: select('Color',  ['red', 'blue', 'yellow'], 'red', null) }}>
    <Button>
        {
            text("Text", "Click me")
        }</Button>
>>>>>>> 09c6ad5e2f870d3032f7c83188e6f843926c50ab
</div>;