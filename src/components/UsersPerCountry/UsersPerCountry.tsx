import React, { useState, MouseEvent, useEffect } from 'react';
import Chart from 'react-apexcharts';
import "./UsersPerCountry.css"
interface UsersPerCountry {
    id: number,
    countryName: string,
    name: string,
    userName: string,
    email: string,
    phoneNumber: string,
}

const UsersPerCountry: React.FC = () => {
    const [options, setOptions] = useState({
        labels: ['6AM', '8AM', '10AM', '12AM', '2PM']
    });

    const [series, setSeries] = useState([10, 20, 30, 40, 50]);


    // useEffect(() => {
    //     const apiUrl = 'https://6538a5b6a543859d1bb1ae4a.mockapi.io/tessting';
    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then((data: UsersPerCountry[]) => {
    //             const categories = data.map((item) => item.name);
    //             const seriesData = data.map((item) => item.id);
    //             setOptions({
    //                 labels: categories
    //             })
    //             setSeries(seriesData)
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (
        <div>
            <div className='title-bar' >
                Users Per Country
            </div>
            <Chart
                options={options}
                series={series}
                type='pie'
                width={380}
                height={550}
                style={{ marginLeft: "200px" }}
            />
        </div>
    );
}

export default UsersPerCountry;