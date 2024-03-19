import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface Tessting {
    language: string;
    quantity: number;
}

const PieChart = () => {
    const [options, setOptions] = useState({
        labels: ['6AM', '8AM'],
    });

    const [series, setSeries] = useState([1, 2]);

    useEffect(() => {
        const apiUrl = 'https://host.whearapp.tech/api/v1/chart/language-chart';
        fetch(apiUrl)
            .then(response => response.json())
            .then((response) => {
                const responseData = response.data;
                const categories = responseData.map((item: Tessting) => item.language);
                const seriesData = responseData.map((item: Tessting) => item.quantity);
                setOptions({
                    labels: categories,
                });
                setSeries(seriesData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Language Chart</h2>
            <Chart
                options={options}
                series={series}
                type='pie'
                width={380}
                height={550}
            />
        </div>
    );
};

export default PieChart;
