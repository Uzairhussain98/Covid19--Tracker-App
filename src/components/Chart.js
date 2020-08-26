import React from 'react';
import { Pie } from 'react-chartjs-2';

function Chart(props) {

    const data = {
        labels: [
            'Total Active Cases',                                    
            'Total Deaths',
            'Total Recovered',
            
        ],
        datasets: [{
            data: [props.totalCases, props.totalDeaths, props.totalRecovered, props.totalSeriousCases],
            backgroundColor: [
                '#799cff',                
                '#ec8b37',
                '#4dbb6f',
                '#cc4646'
            ],
            hoverBackgroundColor: [
                '#799cff',                
                '#ec8b37',
                '#4dbb6f',
                '#cc4646'
            ]
        }]
    };

    return (
        <div>
            <h2 style={{textAlign:"center"}}>Covid-19 Cases</h2>
            <Pie data={data} height={100} />
        </div>
    );
};

export default Chart