import React from 'react'
import { Line } from 'react-chartjs-2'

export const Input = (props) => {
    var inputs = props.input;
    var outputs = props.output;
    var data = {
        labels: inputs,
        datasets: [
            {
                label: 'x(t)',
                data: outputs,
                fill: false,
                tension: '0.1'
            }
        ]
    }
    return (
        <React.Fragment>
            <div className="linechart">
                <Line
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        borderColor: 'red',
                        indexAxis: 'x',
                        scales: {
                            x: {
                                beginAtZero: true
                            },
                            y: {
                                stacked: true
                            }
                        }
                    }}
                />
            </div>
        </React.Fragment>
    )
}
