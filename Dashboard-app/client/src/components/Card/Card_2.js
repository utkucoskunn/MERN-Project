import * as React from 'react';
import {Link} from "react-router-dom";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

function Card_f() {
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Paper
                    sx={{
                        p: 10,
                        maxWidth: 1200,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={20}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={20}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Products
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Typography variant="subtitle1" component="div">
                                    Total 20
                                </Typography>

                            </Grid>


                        </Grid>
                        <Grid item>

                            <CardActions>
                                <Stack spacing={2} direction="row" margin={1}>
                                    <Link to="/productmanagement">
                                        <Button variant="contained">Product Management</Button>
                                        </Link>
                                </Stack>
                            </CardActions>

                        </Grid>
                    </Grid>
                </Paper>

            </CardContent>

        </Card>
);
}

export default Card_f;
