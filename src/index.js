import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { LeftMenu } from './LeftMenu.js';
import { ShiftingForm } from './ShiftingForm.js';

export function Visualizer(){
    return(
        <React.Fragment>
            <Header/>
            <LeftMenu/>
            <ShiftingForm/>
            <Footer/>
        </React.Fragment>
    );
};

ReactDOM.render(<Visualizer/>, document.getElementById('root'));