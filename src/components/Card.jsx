import React, { useState, useEffect } from 'react';
import map from '../data/data.json';
import { Typography, Grid } from '@mui/material';
import Cards from './Cards';
import Header from './Header';


const Card = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = '8fa57860';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my.api.mockaroo.com/waybill', {
          headers: {
            'X-API-Key': apiKey, // Include your API key in the Authorization header
            // 'Content-Type': 'application/json',  // Adjust content type if necessary
          },
        });

        

        if (!response.ok) {
          console.log(response);
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {data?  
      <div style={{ display: 'flex', flexDirection: 'column', width: '110%' }}>
        <div >
          <Header />
        </div>
        <Grid container spacing={1} >
          {data.map((e, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} xl={3}>
              <Cards item={e} />
            </Grid>
          ))}
        </Grid>
      </div>
    :<p>hi</p>}
    </>
  )
}

export default Card