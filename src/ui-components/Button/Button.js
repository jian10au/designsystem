import {Colors} from '../../design-tokens/colors';
import React from 'react';

<<<<<<< HEAD
export default function ({ iconSrc, children }) {
    return <button>
        {iconSrc && <img src={iconSrc} />}
        {children}
    </button>
=======
export default function ({ children, props}) {
    return <button>{children}</button>
>>>>>>> 09c6ad5e2f870d3032f7c83188e6f843926c50ab
} 