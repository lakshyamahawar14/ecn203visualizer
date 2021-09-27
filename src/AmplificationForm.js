import React from 'react';

export const AmplificationForm = () => {
    return (
        <React.Fragment>
            <main>
                <heading>Signal Amplification</heading>
                <form>
                    <label htmlFor="equation">
                        Enter Your Equation
                        <input type="text" id="equation" placeholder="e.g. 2*t" required/>
                    </label>
                    <label htmlFor="factor">
                        Enter Amplification Factor
                        <input type="text" id="factor" placeholder="e.g. 3" required/>
                    </label>
                    <input type="submit" id="btn" value="Visualize" />
                </form>
            </main>
        </React.Fragment>
    );
};
