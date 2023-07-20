import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, 
);

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const [chartOptions, setChartOptions]= useState({});

    useEffect(() =>{
        setChartData(
            {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
                datasets: [
                    {
                        label: 'Sales Php',
                        data: [10125,2999,3999,5667,8960,8989,9796],
                        borderColor: 'rgb(53, 162,235)',
                        backgroundColor: 'rgb(53,162,235,0.4)',
                    },
                ]
            }
        );
        setChartOptions({
            plugins: {
                legend: {
                    position :'top',
                   
            },
        
                title: {
                    display: true,
                    text:'Income Statistics'
                }
        },
                maintainAspectRatio: false,
                respondoive: true
    })
    }, [])
  return (
    <div className='w-full md:col-span-2 lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white flex-shrink'>
         <Bar data={chartData} options={chartOptions} />
    </div>
  )
}
