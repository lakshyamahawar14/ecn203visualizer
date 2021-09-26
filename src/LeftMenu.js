import React from 'react';
import { Visualizer } from './index.js';

export const LeftMenu = () => {
    return (
        <React.Fragment>
            <leftmenu>
                <ul>
                    <li><a onClick={() => <Visualizer chosen={1}/>}>x(t+a)</a></li>
                    <li><a onClick={() => <Visualizer chosen={2}/>}>x(t*a)</a></li>
                    <li><a onClick={() => <Visualizer chosen={3}/>}>x(-t)</a></li>
                    <li><a onClick={() => <Visualizer chosen={4}/>}>a*x(t)</a></li>
                </ul>
            </leftmenu>
        </React.Fragment>
    );
};

