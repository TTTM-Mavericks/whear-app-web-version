import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

interface TimeWiseUserAppInstalled {
    userID: number;
    createDate: Date;
    language: string;
}

const TimeWiseUserAppInstalled: React.FC = () => {
    const [options, setOptions] = useState({
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    });
    const [series, setSeries] = useState([
        {
            name: 'Users',
            data: Array(12).fill(0)
        }
    ]);

    useEffect(() => {
        const apiUrl = 'http://localhost:6969/api/v1/user/get-all-user';
        fetch(apiUrl)
            .then(response => response.json())
            .then((response) => {
                const responseData: TimeWiseUserAppInstalled[] = response.data;
                const monthCounts: number[] = Array(12).fill(0);
                responseData.forEach((item: TimeWiseUserAppInstalled) => {
                    const month = new Date(item.createDate).getMonth();
                    monthCounts[month]++;
                });

                setSeries([
                    {
                        name: 'Users',
                        data: monthCounts
                    }
                ]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className='title-bar'>
                <h1>Time wise Users Installed App</h1>
            </div>
            <br />
            <br />
            <Chart
                options={options}
                series={series}
                type='bar'
                width={1000}
                height={600}
            />
        </div>
    );
}

export default TimeWiseUserAppInstalled;
