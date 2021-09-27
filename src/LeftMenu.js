import { render } from '@testing-library/react';
import React from 'react';
import { AmplificationForm } from './AmplificationForm.js';
import { ReflectionForm } from './ReflectionForm.js';
import { ScalingForm } from './ScalingForm.js';
import { ShiftingForm } from './ShiftingForm.js';

export const LeftMenu = () => {
    return (
        <React.Fragment>
            <leftmenu>
                <ul>
                    <li><a onClick={() => render(<ShiftingForm/>)}>x(t+a)</a></li>
                    <li><a onClick={() => render(<ScalingForm/>)}>x(t*a)</a></li>
                    <li><a onClick={() => render(<ReflectionForm/>)}>x(-t)</a></li>
                    <li><a onClick={() => render(<AmplificationForm/>)}>a*x(t)</a></li>
                </ul>
            </leftmenu>
        </React.Fragment>
    );
};

