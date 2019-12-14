import { Colors } from './colors';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Design tokens', module)
  .add('Colors', () => <div>
      <h1>Colors</h1>
      <p></p>
      <div>Hot red</div>
      <div style={{backgroundColor: Colors.hotRed, width: 10, heigth: 10}}></div>
  </div>);