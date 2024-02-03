import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const LineChart = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const apiUrl = 'https://whear-app.azurewebsites.net/api/v1/user/get-all-user';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setData(data.data);
                    console.log("Data received:", data.data);
                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const chartOptions: ApexOptions = {
        chart: {
            type: 'line',
        },
        xaxis: {
            categories: data.map(item => item.role),
        },
        series: [
            {
                name: 'Your Line Chart Label',
                data: data.map(item => item.userID),
            },
        ],
    };

    return (
        <div>
            <h2 className='title-bar'>Your Line Chart</h2>
            <Chart options={chartOptions} series={chartOptions.series} type="line" height={350} />
        </div>
    );
};

export default LineChart;
