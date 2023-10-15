import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBikeDetails, removeBikes, addLoggedInUser } from '../../features/bikes/bikeSlice';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from '@mui/material';
import { addCarDetail, removeCars } from '../../features/cars/carSlice';

const Cars = () => {
    const dispatch = useDispatch();
    const reduxBikes = useSelector((state: any) => state.cars.carsOwnedByUser);
    const [bikes, setBikes] = useState(reduxBikes ?? []);
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [make, setMake] = useState('');
    const [type, setType] = useState('');
    const [transmission, setTransmission] = useState('');
    useEffect(() => {
        setBikes(reduxBikes)
    }, [reduxBikes])
    const addBike = () => {
        dispatch(addCarDetail([
            {
                make,
                model,
                price,
                color,
                type,
                transmission
            }]));
    }

    const removeAllBikes = () => {
        dispatch(removeCars());

    }
    const setAllStatesEmt = () => {
        setModel('');
        setColor('');
        setPrice('');
        setMake('');
    }
    return (<>

        <h1>Car details</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}

            noValidate
            autoComplete="off"
        >

            <TextField
                value={make}
                onInput={(event: any) => setMake(event?.target.value)}
                id="make"
                label="Make"
                variant="standard" />
            <TextField
                value={model}
                onInput={(event: any) => setModel(event?.target.value)}
                id="model"
                label="Model"
                variant="standard" />
            <TextField
                value={price}
                onInput={(event: any) => setPrice(event?.target.value)}
                id="price"
                label="Price"
                variant="standard" />
            <TextField
                value={color}
                onInput={(event: any) => setColor(event?.target.value)}
                id="color"
                label="Color"
                variant="standard" />
            <TextField
                value={type}
                onInput={(event: any) => setType(event?.target.value)}
                id="type"
                label="type"
                variant="standard" />
            <TextField
                value={transmission}
                onInput={(event: any) => setTransmission(event?.target.value)}
                id="transmission"
                label="transmission"
                variant="standard" />
        </Box>
        <div>
            <Button onClick={() => setAllStatesEmt()} variant="text">Clear</Button>
            <Button onClick={() => removeAllBikes()} variant="outlined">Clear all existing records</Button>
            <Button onClick={() => addBike()} variant="contained">Save</Button>
        </div>
        <span style={{ padding: '1em' }}>
            <h3>Cars recently added:</h3>
        </span>
        <div className='cards wrap'>{bikes?.map((item: any, index: any) =>
            <Card sx={{ minWidth: 275, maxWidth: 300, margin: '2em' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {index + 1}
                    </Typography>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemText primary="Make" secondary={item.make} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Model" secondary={item.model} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Price" secondary={item.price} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Color" secondary={item.color} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Type" secondary={item.type} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Transmission" secondary={item.transmission} />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        )}
        </div>
    </>)
}
export default Cars;