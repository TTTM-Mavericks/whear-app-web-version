import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const PieChart = () => {
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
            type: 'pie',
        },
        labels: data.map(item => item.userID),
        series: data.map(item => item.userID),
    };

    return (
        <div>
            <h2>Your Pie Chart</h2>
            <Chart options={chartOptions} series={chartOptions.series} type="pie" height={350} />
        </div>
    );
};

export default PieChart;
