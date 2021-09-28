import React from 'react';
import { Input } from './Input.js'

export const ShiftingForm = () => {
    const getFormData = (e) => {
        e.preventDefault();
        const inputequation = document.getElementById('equation').value;
        const shiftingfactor = document.getElementById('factor').value;
        if(!inputequation || !shiftingfactor){
            return alert('Please Fill Form')
        }
        var a=1, t=5, c=0;
        var checkt=false;
        var aftert=false;
        var minus=false;
        var i
        for(i=0; i<inputequation.length; i++){
            if(inputequation[i] == 't'){
                checkt = true;
                console.log('t');
            }
            else if(inputequation[i] == '+'){
                aftert = true;
                console.log('+');
                continue;
            }
            else if(inputequation[i] == '*'){
                aftert = true;
                console.log('*');
                continue;
            }
            else if(inputequation[i] == '-'){
                aftert = true;
                minus=true;
                console.log('-');
                continue;
            }
            else if(aftert){
                c = parseInt(inputequation[i]);
                console.log(c);
            }
            else if(!aftert){
                a = parseInt(inputequation[i]);
                console.log(a);
            }
        }
        if(!checkt){
            return alert(`Please Keep Independent Variable as 't'`)
        }
        var ineq
        if(minus){
            ineq = a*t-c;
        }
        else{
            ineq = a*t+c;
        }
    }
    return (
        <React.Fragment>
            <main>
                <heading>Time Shifting</heading>
                <form>
                    <label htmlFor="equation">
                        Enter Your Equation
                        <input type="text" id="equation" placeholder="e.g. 2*t" required />
                    </label>
                    <label htmlFor="factor">
                        Enter Shifting Factor
                        <input type="text" id="factor" placeholder="e.g. 3" required />
                    </label>
                    <button id="btn" onClick={getFormData}>Visualize</button>
                </form>
                <Input/>
            </main>
        </React.Fragment>
    );
};
