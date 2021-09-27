import { render } from '@testing-library/react';
import React from 'react';
import { AmplificationForm } from './AmplificationForm.js';
import { ReflectionForm } from './ReflectionForm.js';
import { ScalingForm } from './ScalingForm.js';
import { ShiftingForm } from './ShiftingForm.js';

export const LeftMenu = () => {
    var e1 = true, e2 = false, e3 = false, e4 = false;

    const renderShifting = () => {
        var element1 = document.getElementById('shiftinglink');
        var element2 = document.getElementById('scalinglink');
        var element3 = document.getElementById('reflectionlink');
        var element4 = document.getElementById('amplificationlink');
        if (!e1) {
            element1.classList.toggle('active');
            e1 = true;
            if (e2) {
                e2 = false;
                element2.classList.toggle('active');
            }
            else if (e3) {
                e3 = false;
                element3.classList.toggle('active');
            }
            else if (e4) {
                e4 = false;
                element4.classList.toggle('active');
            }
        }
        return render(<ShiftingForm />);
    }

    const renderScaling = () => {
        var element1 = document.getElementById('shiftinglink');
        var element2 = document.getElementById('scalinglink');
        var element3 = document.getElementById('reflectionlink');
        var element4 = document.getElementById('amplificationlink');
        if (!e2) {
            element2.classList.toggle('active');
            e2 = true;
            if (e1) {
                e1 = false;
                element1.classList.toggle('active');
            }
            else if (e3) {
                e3 = false;
                element3.classList.toggle('active');
            }
            else if (e4) {
                e4 = false;
                element4.classList.toggle('active');
            }
        }

        return render(<ScalingForm />);
    }

    const renderReflection = () => {
        var element1 = document.getElementById('shiftinglink');
        var element2 = document.getElementById('scalinglink');
        var element3 = document.getElementById('reflectionlink');
        var element4 = document.getElementById('amplificationlink');
        if (!e3) {
            element3.classList.toggle('active');
            e3 = true;
            if (e2) {
                e2 = false;
                element2.classList.toggle('active');
            }
            else if (e1) {
                e1 = false;
                element1.classList.toggle('active');
            }
            else if (e4) {
                e4 = false;
                element4.classList.toggle('active');
            }
        }

        return render(<ReflectionForm />);
    }

    const renderAmplification = () => {
        var element1 = document.getElementById('shiftinglink');
        var element2 = document.getElementById('scalinglink');
        var element3 = document.getElementById('reflectionlink');
        var element4 = document.getElementById('amplificationlink');
        if (!e4) {
            element4.classList.toggle('active');
            e4 = true;
            if (e2) {
                e2 = false;
                element2.classList.toggle('active');
            }
            else if (e3) {
                e3 = false;
                element3.classList.toggle('active');
            }
            else if (e1) {
                e1 = false;
                element1.classList.toggle('active');
            }
        }
        return render(<AmplificationForm />);
    }

    return (
        <React.Fragment>
            <leftmenu>
                <ul>
                    <li><a id="shiftinglink" className="active" onClick={renderShifting}>x(t+a)</a></li>
                    <li><a id="scalinglink" onClick={renderScaling}>x(t*a)</a></li>
                    <li><a id="reflectionlink" onClick={renderReflection}>x(-t)</a></li>
                    <li><a id="amplificationlink" onClick={renderAmplification}>a*x(t)</a></li>
                </ul>
            </leftmenu>
        </React.Fragment>
    );
};

