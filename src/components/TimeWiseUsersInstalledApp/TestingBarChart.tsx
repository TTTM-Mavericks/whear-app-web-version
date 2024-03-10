import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface GetUser {
    userID: number;
    createDate: string;
}

const BarChart: React.FC = () => {
    const [options, setOptions] = useState<ApexOptions>({
        xaxis: {
            categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    });
    const [series, setSeries] = useState([
        {
            name: 'Number of Users',
            data: [] as number[]
        }
    ]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiUrl = 'https://tam.mavericks-tttm.studio/api/v1/user/get-all-user';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data: GetUser[] | GetUser) => {
                if (!Array.isArray(data)) {
                    throw new Error('Invalid data format: Data is not an array');
                }

                if (data.length === 0) {
                    throw new Error('Data array is empty');
                }

                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const monthCounts = Array(12).fill(0);
                setSeries([
                    {
                        name: 'Number of Users',
                        data: monthCounts
                    }
                ]);
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    return (
        <div>
            <Chart options={options} series={series} type="bar" width={500} />
        </div>
    );
};

export default BarChart;
