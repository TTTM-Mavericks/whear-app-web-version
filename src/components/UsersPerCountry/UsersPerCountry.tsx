import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

interface Data {
    month: string;
    amount: number;
    amountRemaining: number;
}

interface Payment {
    // data: Data;
    desc: string;
    code: number;
    // amountRemaining: number;
    //     orchidName: string,
    //     id: number,
    //     value: number,
}


const UserPerCountry: React.FC = () => {
    const [values, setValue] = useState<string>("today");
    const [category, setCategory] = useState<string[]>([]);
    const [data, setData] = useState<number[]>([]);
    const [data2, setData2] = useState<number[]>([]);

    const status = [
        {
            value: 'today',
            label: 'Today'
        },
        {
            value: 'month',
            label: 'This Month'
        },
        {
            value: 'year',
            label: 'This Year'
        }
    ];

    useEffect(() => {
        const apiUrl = `https://host.whearapp.tech/api/v1/chart/payment-chart`;
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((res) => {
                const responseData = res.data;
                console.log("Data received:", data);
                const idData = responseData.map((item: Data) => item.month)
                const amountData = responseData.map((item: Data) => item.amount)
                setData(amountData);
                setData2(amountData)
                setCategory(idData);

            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // useEffect(() => {
    //     const apiUrl = 'http://localhost:6969/api/v1/payment/get-all-payment';
    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then((response) => {
    //             console.log("response" + response);

    //             const responseData = response.data;
    //             console.log("res" + responseData);

    //             const idData = responseData.map((item: Payment) => item.data.id)
    //             const amountData = responseData.map((item: Payment) => item.data.amount)
    //             const amountRemainingData = responseData.map((item: Payment) => item.data.amountRemaining)
    //             // const idData: string[] = [];
    //             // const amountData: number[] = [];
    //             // const amountRemainingData: number[] = [];

    //             // data.forEach((item) => {
    //             //     idData.push(item.id);
    //             //     amountData.push(item.amount);
    //             //     amountRemainingData.push(item.amountRemaining);
    //             // });
    //             setData(amountData);
    //             console.log(amountData);
    //             console.log("bebe" + amountRemainingData);


    //             setData2(amountRemainingData);
    //             setCategory(idData);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }
    // )

    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Grid container direction="column" spacing={1} style={{ marginLeft: "1rem", marginTop: "4rem" }}>
                                <Grid item>
                                    <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>Total Growth</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4"> $<CountUp end={2324.00} duration={2} style={{ fontWeight: "bold" }} /></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginRight: "2rem" }}>
                            <TextField
                                id="standard-select-currency"
                                select
                                value={values}
                                onChange={(e) => setValue(e.target.value as string)}
                            >
                                {status.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div style={{ marginTop: "2.2rem" }}>
                {<Chart options={{
                    chart: {
                        id: 'bar-chart',
                        stacked: true,
                        toolbar: {
                            show: true
                        },
                        zoom: {
                            enabled: true
                        }
                    },
                    fill: {
                        type: 'solid'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    grid: {
                        show: true
                    },
                    legend: {
                        show: true,
                        fontSize: '14px',
                        fontFamily: `'Roboto', sans-serif`,
                        position: 'bottom',
                        offsetX: 20,
                        labels: {
                            useSeriesColors: false
                        },
                        markers: {
                            width: 16,
                            height: 16,
                            radius: 5
                        },
                        itemMargin: {
                            horizontal: 15,
                            vertical: 8
                        }
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '50%'
                        }
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: 'bottom',
                                    offsetX: -10,
                                    offsetY: 0
                                }
                            }
                        }
                    ],
                    xaxis: {
                        categories: category
                    }
                }}
                    series={[
                        {
                            name: data.toString(),
                            data: data
                        },
                        {
                            name: data2.toString(),
                            data: data2
                        }
                    ]}
                    type="bar" width={1100} height={700} />}
            </div>
        </Card>
    );
}

export default UserPerCountry;