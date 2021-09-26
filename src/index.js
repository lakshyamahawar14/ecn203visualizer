import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { LeftMenu } from './LeftMenu.js';
import { AmplificationForm } from './AmplificationForm.js';
import { ReflectionForm } from './ReflectionForm.js';
import { ScalingForm } from './ScalingForm.js';
import { ShiftingForm } from './ShiftingForm.js';

export function Visualizer(chosen){
    function renderForm(){
        if(chosen === 1){
            return <ShiftingForm/>
        }
        else if(chosen === 2){
            return <ScalingForm/>
        }
        else if(chosen === 3){
            return <ReflectionForm/>
        }
        else{
            return <AmplificationForm/>
        }
    }
    return(
        <React.Fragment>
            <Header/>
            <LeftMenu/>
            {renderForm()}
            <Footer/>
        </React.Fragment>
    );
};

ReactDOM.render(<Visualizer/>, document.getElementById('root'));