import React, { useState, MouseEvent, useEffect } from 'react';
import Chart from 'react-apexcharts';

interface GuardianWisePieChart {
    id: number,
    countryName: string,
    name: string,
    userName: string,
    email: string,
    phoneNumber: string,
}

const GuardianWisePieChart: React.FC = () => {
    const [options, setOptions] = useState({
        labels: ['6AM', '8AM', '10AM', '12AM', '2PM']
    });

    const [series, setSeries] = useState([10, 20, 30, 40, 50]);


    useEffect(() => {
        const apiUrl = 'https://6538a5b6a543859d1bb1ae4a.mockapi.io/tessting';
        fetch(apiUrl)
            .then(response => response.json())
            .then((data: GuardianWisePieChart[]) => {
                const categories = data.map((item) => item.name);
                const seriesData = data.map((item) => item.id);
                setOptions({
                    labels: categories
                })
                setSeries(seriesData)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Chart
                options={options}
                series={series}
                type='pie'
                width={380}
                height={550}
            />
        </div>
    );
}

export default GuardianWisePieChart;