import React from 'react';
import { Input } from './Input.js';
import { useState } from 'react';

export const ReflectionForm = () => {
    var [input, setInput] = useState([]);
    var [output, setOutput] = useState([]);
    var [isForm, setIsForm] = useState(false);
    
    const getFormData = (e) => {
        e.preventDefault();
        const inputequation = document.getElementById('equation').value;
        const reflectionfector = document.getElementById('factor').value;
        if(!inputequation || !reflectionfector){
            return alert('Please Fill Form');
        }
        var a=1, c=0;
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
                return a*t-c;
            }
            return a*t+c;
        }
        var inputarr = [];
        var outputarr = [];
        var t;
        for(t = -4; t<= 4; t++){
            inputarr.push(t);
            outputarr.push((-1)*ineqn(t));
        }
        console.log(inputarr);
        console.log(outputarr);
        setInput(inputarr);
        setOutput(outputarr);
        setIsForm(true);
    }
    return (
        <React.Fragment>
            <main>
                <heading>Time Reflection</heading>
                <form>
                    <label htmlFor="equation">
                        Enter Your Equation
                        <input type="text" id="equation" placeholder="e.g. 2*t" required />
                    </label>
                    <label htmlFor="factor">
                        Enter Reflection Factor
                        <input type="text" id="factor" placeholder="e.g. 3" value="-1" />
                    </label>
                    <input type="submit" id="btn" value="Visualize" onClick={getFormData}/>
                </form>
                {isForm && <Input input={input} output={output}/>}
            </main>
        </React.Fragment>
    );
};
