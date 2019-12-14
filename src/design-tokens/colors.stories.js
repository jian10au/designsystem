import { Colors } from './colors';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Design tokens', module)
    .add('Colors', () => <div>
        <h1>Colors</h1>
        <p>
            <div>Hot Pink</div>
            <div style={{ background: Colors.hotPink, width: 50, height: 50 }}>
            </div>
        </p>
        <p>
            <div>Warm Pink</div>
            <div style={{ background: Colors.warmPink, width: 50, height: 50 }}>
            </div>
        </p>
        <p>
            <div>Light Pink</div>
            <div style={{ background: Colors.lightPink, width: 50, height: 50 }}>
            </div>
        </p>
        <p>
            <div>Baby Pink</div>
            <div style={{ background: Colors.babyPink, width: 50, height: 50 }}>
            </div>
        </p>
    </div>);