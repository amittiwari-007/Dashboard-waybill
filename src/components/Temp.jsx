import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';

const Temp = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{  width: '300px', backgroundColor: '#f0f0f0' }}
    >
      <img src="path/to/logo.png" alt="Company Logo" style={{ height: '50px', marginBottom: '16px' }} />

      <Button variant="contained"  style={{backgroundColor:'#2E2C5E',margin:'15px', marginBottom: '15px',padding:'10px', textAlign: 'left',fontSize:'10px'}}>
        <GridOnOutlinedIcon style={{ fontSize: 15,padding:5 }} />
        Transaction Level Info
      </Button>
      <Button variant="outlined"  style={{color:'#2E2C5E', margin:'15px',marginBottom: '15px' ,padding:'10px',textAlign: 'left',fontSize:'10px'}}>
      <GridOnOutlinedIcon style={{ fontSize: 15 ,padding:5}} />
        Waybill Collection
      </Button>
      <Button variant="outlined" style={{color:'#2E2C5E',margin:'15px', marginBottom: '15px' ,padding:'10px',textAlign: 'left',fontSize:'10px'}}>
      <GridOnOutlinedIcon style={{ fontSize: 15,padding:5 }} />
        Override approval
      </Button>
    </Box>
    )
}

export default Temp