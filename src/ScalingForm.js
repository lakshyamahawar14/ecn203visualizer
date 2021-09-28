import React from 'react';
import { Input } from './Input.js';
import { useState } from 'react';

export const ScalingForm = () => {
    var [previn, setPrevIn] = useState([]);
    var [prevout, setPrevOut] = useState([]);

    var [input, setInput] = useState([]);
    var [output, setOutput] = useState([]);
    var [isForm, setIsForm] = useState(false);
    
    var getFormData = (e) => {
        e.preventDefault();
        const inputequation = document.getElementById('scalingequation').value;
        const scalingfactor = document.getElementById('scalingfactor').value;
        if(!inputequation || !scalingfactor){
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
            }
            else if(inputequation[i] === '*'){
                aftert = true;
                // console.log('*');
            }
            else if(inputequation[i] === '-'){
                aftert = true;
                minus=true;
                // console.log('-');
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
        var previnarr = [];
        var prevoutarr = [];
        for(t = -8; t<= 8; t++){
            previnarr.push(t);
            prevoutarr.push(a*(t)+c);
        }
        const ineqn = (t) => {
            if(minus){
                return a*(parseFloat(scalingfactor)*t)-c;
            }
            return a*(parseFloat(scalingfactor)*t)+c;
        }
        var inputarr = [];
        var outputarr = [];
        for(t = -8; t<= 8; t++){
            inputarr.push(t);
            outputarr.push(ineqn(t));
        }
        setPrevIn(previnarr);
        setPrevOut(prevoutarr);
        setInput(inputarr);
        setOutput(outputarr);
        setIsForm(true);
    }
    return (
        <React.Fragment>
            <main>
                <heading>Time Scaling</heading>
                <form>
                    <label htmlFor="equation">
                        Enter Your Equation
                        <input type="text" id="scalingequation" placeholder="e.g. 2*t" required />
                    </label>
                    <label htmlFor="factor">
                        Enter Scaling Factor
                        <input type="text" id="scalingfactor" placeholder="e.g. 3" required />
                    </label>
                    <input type="submit" className="btn" value="Visualize" onClick={getFormData}/>
                </form>
                <div className="initial">
                {isForm && <Input input={previn} output={prevout}/>}
                </div>
                {isForm && <Input input={input} output={output}/>}
            </main>
        </React.Fragment>
    );
};
