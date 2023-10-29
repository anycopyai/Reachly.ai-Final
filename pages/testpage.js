import axios from 'axios';
import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = 'https://api.elixcent.com/api_endpoint';

    axios.get(url)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There was an error!', error);
        setIsLoading(false);
      });
  }, []);

  const Skeleton = () => (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '4px'}}>
      <div style={{ backgroundColor: '#eee', height: '20px', marginBottom: '8px' }}></div>
      <div style={{ backgroundColor: '#eee', height: '20px', width: '60%' }}></div>
    </div>
  );

  return (
    <div>
      <h1>Data from API</h1>
      { isLoading ? <Skeleton /> : <pre>{JSON.stringify(data, null, 2)}</pre> }
    </div>
  );
};

export default MyComponent;
