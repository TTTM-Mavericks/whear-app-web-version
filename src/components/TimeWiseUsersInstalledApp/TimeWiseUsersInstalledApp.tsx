import React, { useState, MouseEvent, useEffect } from 'react';
import Chart from 'react-apexcharts';

interface TimeWiseUserAppInstalled {
    id: number,
    countryName: string,
    name: string,
    userName: string,
    email: string,
    phoneNumber: string,
}

const TimeWiseUserAppInstalled: React.FC = () => {
    const [options, setOptions] = useState({
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ['6AM', '8AM', '10AM', '12AM', '2PM', '4PM', '6PM', '8PM', '10PM', '12PM']
        }
    })

    const [series, setSeries] = useState([
        {
            data: [10, 20, 30, 40, 50]
        }
    ])


    useEffect(() => {
        const apiUrl = 'https://6538a5b6a543859d1bb1ae4a.mockapi.io/tessting';
        fetch(apiUrl)
            .then(response => response.json())
            .then((data: TimeWiseUserAppInstalled[]) => {
                const categories = data.map((item) => item.name);
                const seriesData = data.map((item) => ({
                    data: [item.id],
                }));
                setOptions({
                    ...options,
                    xaxis: {
                        categories,
                    }
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
                type='bar'
            />
        </div>
    );
}

export default TimeWiseUserAppInstalled;