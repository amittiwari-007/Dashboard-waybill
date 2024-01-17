import { Card, CardContent, Typography, Box, CardActions, Button, Grid, Avatar, CardHeader, IconButton } from '@mui/material'
import React, { useState,useEffect } from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { deepOrange, green, blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import img from './../data/icons8-person.gif';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Cards = (props) => {

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', margin: '-14px 0px ', transform: 'scale(0.8)', color: props.item.billing ? 'green' : 'orange', fontSize: '35px', verticalAlign: 'middle' }}
        >
            •
        </Box>
    );

    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    };


    return (
        <Card sx={{ maxWidth: 500, minHeight: 200 }} style={{
            border: isClicked ? '2px solid #2E2C5E' : '2px solid transparent', // Set the border color when clicked
            transition: 'border-color 0.3s ease', // Add a smooth transition for better user experience
            cursor: 'pointer', // Change cursor to pointer on hover
        }} onClick={handleCardClick}>

            <CardHeader sx={{ marginBottom: '-20px' }} avatar={
                <AssignmentOutlinedIcon sx={{ color: '#8783E9' }} />
            }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />

                    </IconButton>
                } title={<Typography sx={{ fontWeight: 'bold', fontSize: '20', paddingLeft: '-10px' }}>
                    {props.item.id}</Typography>}
            />
            <CardContent>
                <Grid container direction={'column'}>
                    <Grid item>
                        <Typography sx={{ fontSize: 15, color: '#2E2C5E', marginBottom: '-3px' }} color="text.secondary" gutterBottom>
                            <b>{props.item.name}</b>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 14, color: '#686868', mb: 2 }} component="div">
                            <b>{props.item.productID}</b>
                        </Typography>
                    </Grid>
                    <Grid item container alignItems="center">
                        <CalendarMonthOutlinedIcon sx={{ color: '#2E2C5E' }} />
                        <Typography sx={{ fontSize: 12, fontWeight: 'bold', ml: 1 }}>{props.item.from}-{props.item.to}</Typography>
                    </Grid>
                    <Grid item>
                        <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '10px' }}>
                            <div style={{ flex: '1 0 0%', boxSizing: 'border-box', padding: '8px' }}>
                                <div>Billing</div>
                                <div style={{ marginLeft: '-4px' }}>
                                    {/* {bull} */}
                                    <Box
            component="span"
            sx={{ display: 'inline-block', margin: '-14px 0px ', transform: 'scale(0.8)', color: props.item.billing ? 'green' : 'orange', fontSize: '35px', verticalAlign: 'middle' }}
        >
            •
        </Box>
                                    <Box
                                        component="span"
                                        sx={{
                                            display: 'inline-block',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        {props.item.billing? <span>Completed</span>:<span>Pending</span> }
                                    </Box>
                                </div>

                            </div>
                            <div style={{ flex: '1 0 0%', boxSizing: 'border-box', padding: '8px' }}>

                                <div>Filling</div>
                                <div style={{ marginLeft: '-4px' }}>
                                    {/* {bull} */}
                                    <Box
            component="span"
            sx={{ display: 'inline-block', margin: '-14px 0px ', transform: 'scale(0.8)', color: props.item.filling ? 'green' : 'orange', fontSize: '35px', verticalAlign: 'middle' }}
        >
            •
        </Box>
                                    <Box
                                        component="span"
                                        sx={{
                                            display: 'inline-block',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                      {props.item.filling? <span>Completed</span>:<span>Pending</span> }  
                                    </Box>
                                </div>
                            </div>
                            <div style={{ flex: '1 0 0%', boxSizing: 'border-box', padding: '8px' }}>

                                <div>MIS</div>
                                <div style={{ marginLeft: '-4px' }}>
                                    {/* {bull} */}
                                    <Box
            component="span"
            sx={{ display: 'inline-block', margin: '-14px 0px ', transform: 'scale(0.8)', color: props.item.MIS ? 'green' : 'orange', fontSize: '35px', verticalAlign: 'middle' }}
        >
            •
        </Box>
                                    <Box
                                        component="span"
                                        sx={{
                                            display: 'inline-block',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        {props.item.MIS? <span>Completed</span>:<span>Pending</span> }
                                    </Box>
                                </div>
                            </div>
                        </div>

                    </Grid>
                </Grid>
                <hr></hr>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-10px' }}>
                    <div className="left">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt='' src={img} sx={{ width: 24, height: 24 }} />
                            <Typography variant="caption" style={{ marginLeft: '8px', color: '#686868', fontWeight: 'bold' }}>
                                {props.item.personName}
                            </Typography>
                        </div>
                    </div>
                    <div className="right">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOnOutlinedIcon sx={{ color: '#8783E9', fontSize: 20 }} />
                            <Typography variant="caption" style={{ color: '#686868', fontWeight: 'bold' }}>
                                {props.item.location}
                            </Typography>
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

export default Cards