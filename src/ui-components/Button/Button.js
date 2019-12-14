import {Colors} from '../../design-tokens/colors';
import React from 'react';

export default function ({ iconSrc, children }) {
    return <button>
        {iconSrc && <img src={iconSrc} />}
        {children}
    </button>
} 