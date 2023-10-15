import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import { MyContext } from '../../MyContext';


const Summary = () => {
    const reduxBikes = useSelector((state: any) => state.bikes?.bikes)
    const reduxCars = useSelector((state: any) => state.cars.carsOwnedByUser);
    const [bikes, setBikes] = useState(reduxBikes ?? []);
    const [cars, setCars] = useState(reduxCars ?? []);
    const contextSample = useContext(MyContext);
    useEffect(() => {
        setBikes(reduxBikes);
        setCars(reduxCars);
    }, [reduxBikes, reduxCars])
    console.log('contextSample', contextSample);

    return (<>
        <span style={{ padding: '1em' }}>
            <h3>Bikes recently added:</h3>

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
                    </List>
                </CardContent>
            </Card>
        )}
        </div>
        <span style={{ padding: '1em' }}>
            <h3>Cars recently added:</h3>
        </span>
        <div className='cards wrap'>{cars?.map((item: any, index: any) =>
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
export default Summary;