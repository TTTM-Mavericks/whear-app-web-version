import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

interface LatestRegistration {
    userID: number;
    username: string;
    dateOfBirth: string;
    phone: string;
    email: string;
    gender: boolean;
    role: string;
    language: string;
    status: string;
}

const LatestRegistration: React.FC = () => {
    const [options, setOptions] = useState<{
        chart: { id: string };
        xaxis: { categories: string[] };
    }>({
        chart: { id: 'basic-bar' },
        xaxis: {
            categories: [],
        },
    });

    const [series, setSeries] = useState<Array<{ name: string; data: number[] }>>([
        {
            name: 'ha noi',
            data: [],
        },
    ]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const TOKEN = localStorage.getItem("accessToken")

    useEffect(() => {
        const apiUrl = 'https://tam.mavericks-tttm.studio/api/v1/get-all-user';
        const headers = {
            "Authorization": `Bearer ${TOKEN}`,
        };
        fetch(apiUrl, { headers })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: LatestRegistration[]) => {
                const categories = data.map((item) => item.role);
                const seriesData = data.map((item) => ({
                    name: item.role,
                    data: [item.userID],
                }));
                setOptions((prevOptions) => ({
                    ...prevOptions,
                    xaxis: {
                        categories,
                    },
                }));

                setSeries(seriesData);
            })
            .catch(error => {
                setError('Error fetching data: ' + error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className='title-bar'>Latest Registrations</div>
            <Chart options={options} series={series} type='line' />
        </div>
    );
}

export default LatestRegistration;
