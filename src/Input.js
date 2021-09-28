import React from 'react'
import { Line } from 'react-chartjs-2'

export const Input = () => {
    const data = {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May'
        ],
        datasets: [
            {
                labels: "Sales for 2020 (M)",
                data: [3, 2, 2, 1, 5]
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
                        borderColor: 'red'
                    }}
                />
            </div>
        </React.Fragment>
    )
}
