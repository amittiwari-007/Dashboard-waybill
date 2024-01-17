import React from 'react';
import { Button, FormControl, Select, MenuItem, Typography, Grid, styled, InputLabel } from '@mui/material';

const StyledDiv = styled('div')({
    // backgroundColor: '#e0e0e0',
    padding: '16px',
    borderRadius: '8px',
    fontSize:'25px',
    fontWeight:'bold'
    // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
});


const Header = () => {
    return (
        <>
            <StyledDiv>Create WayBill</StyledDiv>
            <Grid container spacing={2} style={{padding:'5px 0px 20px 10px'}}>
                <Grid item md={3} xs={6}>
                    <Grid container direction={'column'}>
                        <Grid item >
                            <Typography>Vehicle Number</Typography>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth size='small' >
                                <InputLabel >Vehicle Number</InputLabel>
                                <Select >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} xs={6}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <Typography>Transaction Number</Typography>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-simple-select-filled-label">Transaction Number</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2} md={2} sm={6} xs={6} style={{paddingTop: "45px"}} >
                    <Button variant="contained" sx={{backgroundColor:'#2E2C5E'}} size='small'>Apply</Button>
                </Grid>
                <Grid item lg={2} md={0} sm={0} xs={0}>

                </Grid>
                <Grid item lg={2} md={2} sm={6} xs={6} style={{ paddingTop: "4%" }}>
                    <Button fullWidth variant="contained" size='small' sx={{backgroundColor:'#2E2C5E'}}>+ Add new Waybill</Button>
                </Grid>
            </Grid>



        </>
    )
}

export default Header




{/* <Grid container>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={1} alignItems={'center'}>
                        <Grid item xs={12} sm={4} >
                            <Grid container>
                                <Grid item>
                                    <Typography variant="subtitle1" sx={{ paddingTop: '20px' }}>Vehicle Number</Typography>
                                </Grid>
                            <Grid item>

                            <FormControl >
                                <Select
                                    sx={{ width: '200px', height: '30px', fontSize: '0.75rem' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                            </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={4} >
                            <Grid container >
                                <Grid item>
                                    <Typography variant="subtitle1" sx={{ paddingTop: '20px' }}>Transaction Number</Typography>
                                </Grid>
                                <Grid item>
                                    <FormControl >
                                        <Select
                                            sx={{ width: '200px', height: '30px', fontSize: '0.75rem' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container padding={3} spacing={2} alignItems="flex-end">
                                <Grid item md={6}>
                                    <Button variant="contained">Filter</Button>
                                </Grid>
                                <Grid item md={6}>
                                    <Button variant="contained">Apply</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>



                </Grid>
                <Grid item md={6}>

                </Grid>
            </Grid> */}

