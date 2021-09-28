import React from 'react';
import { Input } from './Input.js';
import { useState } from 'react';

export const ShiftingForm = () => {
    var [input, setInput] = useState([]);
    var [output, setOutput] = useState([]);
    var [isForm, setIsForm] = useState(false);
    
    const getFormData = (e) => {
        e.preventDefault();
        const inputequation = document.getElementById('shiftingequation').value;
        const shiftingfactor = document.getElementById('shiftingfactor').value;
        if(!inputequation || !shiftingfactor){
            return alert('Please Fill Form');
        }
        var a=1, c=0;
        var t;
        var checkt=false;
        var aftert=false;
        var minus=false;
        var i;
        for(i=0; i<inputequation.length; i++){
            if(inputequation[i] === 't'){
                checkt = true;
                // console.log('t');
            }
            else if(inputequation[i] === '+'){
                aftert = true;
                // console.log('+');
                continue;
            }
            else if(inputequation[i] === '*'){
                aftert = true;
                // console.log('*');
                continue;
            }
            else if(inputequation[i] === '-'){
                aftert = true;
                minus=true;
                // console.log('-');
                continue;
            }
            else if(aftert){
                c = parseInt(inputequation[i]);
                // console.log(c);
            }
            else if(!aftert){
                a = parseInt(inputequation[i]);
                // console.log(a);
            }
        }
        if(!checkt){
            return alert(`Please Keep Independent Variable as 't'`)
        }
        const ineqn = (t) => {
            if(minus){
                return a*(t+parseFloat(shiftingfactor))-c;
            }
            return a*(t+parseFloat(shiftingfactor))+c;
        }
        var inputarr = [];
        var outputarr = [];
        for(t = -8; t<= 8; t++){
            inputarr.push(t);
            outputarr.push(ineqn(t));
        }
        setInput(inputarr);
        setOutput(outputarr);
        setIsForm(true);
    }

    return (
        <React.Fragment>
            <main>
                <heading>Time Shifting</heading>
                <form>
                    <label htmlFor="equation">
                        Enter Your Equation
                        <input type="text" id="shiftingequation" placeholder="e.g. 2*t" required />
                    </label>
                    <label htmlFor="factor">
                        Enter Shifting Factor
                        <input type="text" id="shiftingfactor" placeholder="e.g. 3" required />
                    </label>
                    <button className="btn" onClick={getFormData}>Visualize</button>
                </form>
                {isForm && <Input input={input} output={output}/>}
            </main>
        </React.Fragment>
    );
};
