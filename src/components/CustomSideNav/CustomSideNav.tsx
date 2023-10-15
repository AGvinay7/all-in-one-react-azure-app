import React, { useState } from 'react';
import { Avatar, Button, Chip, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { NavLink } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const CustomSideNav = () => {
    const [openMenu, setOpenMenu] = useState(true);
    const { instance } = useMsal();
    const beginSignOut = () => {
        instance.logoutRedirect();
    }
    return (
        <>
            <MenuRoundedIcon
                sx={{ fontSize: 60, float: 'left', padding: '0.2em' }}
                onClick={() => setOpenMenu(true)}>
            </MenuRoundedIcon>
            <Drawer
                anchor={'left'}
                open={openMenu}
                onClose={() => setOpenMenu(false)}
            >
                <List>
                    {[
                        { name: 'Home', routePath: '' },
                        { name: 'Users', routePath: 'users' },
                        { name: 'Bike ownership', routePath: 'bikes' },
                        { name: 'Car ownership', routePath: 'cars' },
                        { name: 'Dashboard', routePath: 'dashboard' },
                    ].map((item, index) => (
                        <ListItem key={item.routePath} disablePadding>
                            <NavLink
                                to={`/${item.routePath}`}
                                style={() => {
                                    return {
                                        width: '100%',
                                        fontWeight: "bold",
                                        color: "black",
                                        textDecoration: 'none'
                                    };
                                }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))}
                    <div style={{ marginLeft: '2.7em', marginTop: '10em' }}>
                        <Button onClick={beginSignOut} variant="contained"> Log out</Button>
                    </div>
                </List>


            </Drawer>
        </>
    )
}
export default CustomSideNav;

