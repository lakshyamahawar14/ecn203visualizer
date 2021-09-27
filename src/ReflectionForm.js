import React from 'react';

export const ReflectionForm = () => {
    return (
        <React.Fragment>
            <main>
                <heading>Time Reflection</heading>
                <form>
                    <label htmlFor="equation">
                        Enter Your Equation
                        <input type="text" id="equation" placeholder="e.g. 2*t" required/>
                    </label>
                    <label htmlFor="factor">
                        Enter Reflection Factor
                        <input type="text" id="factor" placeholder="e.g. 3" value="-1"/>
                    </label>
                    <input type="submit" id="btn" value="Visualize" />
                </form>
            </main>
        </React.Fragment>
    );
};
