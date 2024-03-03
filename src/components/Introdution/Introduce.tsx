import * as React from 'react';
import "./Introduce.css"
import { Box } from '@mui/system';

interface User {
    username: string,
    email: string,
    language: string
}

const Introduce: React.FC = () => {
    const [data, setData] = React.useState<User | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:6969/api/v1/user/get-all-user');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const list = await response.json();
                if (list.length > 0) {
                    const firstUser = list[0];
                    setData(firstUser);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 style={{ marginLeft: "-80%" }}>Hey, Admin</h1>
            <Box className="introduce-component">
                <h3>Latest Registration Users</h3>
                <div className='information'>
                    <p className='just-now'>Just Now</p>
                    {data &&
                        <div>
                            <p className='name'>{data.username}</p>
                        </div>
                    }
                    {data &&
                        <div>
                            <p className='email'>{data.email}</p>
                        </div>
                    }
                    <p className='from'>From</p>
                    {data &&
                        <p className='country'>{data.language}</p>
                    }
                </div>
            </Box>
        </div>
    );
}

export default Introduce;
