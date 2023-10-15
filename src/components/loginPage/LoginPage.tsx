import { useMsal, } from '@azure/msal-react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@mui/material';
import reptile from '../../assets/reptile.jpg';

const LoginPage = () => {
    const { instance } = useMsal();
    const beginLogin = () => {
        instance.loginRedirect({
            scopes: ['user.read']
        })
    }
    return (<>

        <Card className='card'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="340"
                    image={reptile}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Welcome from Vinay AG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Please login using your microsoft account
                    </Typography>
                </CardContent>
                <Button onClick={beginLogin} variant="contained"> Click here to login</Button>
            </CardActionArea>
        </Card>


    </>)
}

export default LoginPage