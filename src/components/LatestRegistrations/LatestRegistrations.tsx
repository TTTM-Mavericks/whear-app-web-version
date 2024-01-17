import React, { useState, MouseEvent, useEffect } from 'react';
import Chart from 'react-apexcharts';

interface LatestRegistration {
    id: number,
    countryName: string,
    name: string,
    userName: string,
    email: string,
    phoneNumber: string,
}

const LatestRegistration: React.FC = () => {
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
            name: 'ha noi',
            data: [10, 20, 30, 10, 50]
        },
        {
            name: 'tphcm',
            data: [20, 30, 40, 40, 40]
        },
        {
            name: 'dn',
            data: [30, 20, 20, 20, 10]
        },
        {
            name: 'vt',
            data: [40, 10, 30, 20, 59]
        }
    ])


    // useEffect(() => {
    //     const apiUrl = 'https://6538a5b6a543859d1bb1ae4a.mockapi.io/tessting';
    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then((data: LatestRegistration[]) => {
    //             const categories = data.map((item) => item.name);
    //             const seriesData = data.map((item) => ({
    //                 data: [item.id],
    //             }));
    //             setOptions({
    //                 ...options,
    //                 xaxis: {
    //                     categories,
    //                 }
    //             })
    //             setSeries(seriesData)
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (
        <div>
            <Chart
                options={options}
                series={series}
                type='line'
            />
        </div>
    );
}

export default LatestRegistration;