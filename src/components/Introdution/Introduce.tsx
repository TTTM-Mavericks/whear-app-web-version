import * as React from 'react';
import "./Introduce.css"
import { Box } from '@mui/system';
const Introduce: React.FC = () => {
    const [data, setData] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://6538a5b6a543859d1bb1ae4a.mockapi.io/tessting');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const list = await response.json();
                if (list.length > 0) {
                    const data = list[list.length - 1];
                    setData(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Hey, Admin</h1>
            <Box className="introduce-component">
                <h3>Latest Registration Users</h3>
                <div className='information'>
                    <p className='just-now'>Just Now</p>
                    {data &&
                        <div>
                            <p className='name'>{data.name}</p>
                        </div>
                    }
                    {data &&
                        <div>
                            <p className='email'>{data.email}</p>
                        </div>
                    }
                    <p className='from'>From</p>
                    <p className='country'>VIETNAM</p>
                </div>
            </Box>
        </div>
    );
}

export default Introduce;
