import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Link } from 'react-router-dom';

interface Bebe {
    month: string,
    amount: number
}

const LineChart = () => {
    const [options, setOptions] = useState({
        xaxis: {
            categories: ['6AM', '8AM', '10AM', '12AM', '2PM']
        }
    });
    const [series, setSeries] = useState([
        {
            name: 'Your Line Chart Label',
            data: [10, 20, 30, 40, 50]
        }
    ]);

    useEffect(() => {
        const apiUrl = 'https://tam.mavericks-tttm.studio/api/v1/chart/payment-chart';
        fetch(apiUrl)
            .then(response => response.json())
            .then((response) => {
                const responseData = response.data;
                const categories = responseData.map((item: Bebe) => item.month);
                const seriesData = responseData.map((item: Bebe) => item.amount);
                setOptions({
                    xaxis: {
                        categories: categories
                    }
                })
                setSeries([
                    {
                        name: 'Your Line Chart Label',
                        data: seriesData
                    }
                ]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Link to="https://my.payos.vn/586bd1bb6f5a11ee824b42010a30c004/dashboard" style={{ textDecoration: "none", color: "black" }}><h2 className='title-bar'>Payment Chart</h2></Link>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineChart;
