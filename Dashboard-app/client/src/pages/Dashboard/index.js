import React from "react";
import {Link} from "react-router-dom";

import Card from "../../components/Card/Card";
import Card_2 from "../../components/Card/Card_2";
import Navbar from "../../components/Navbar/Navbar"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Dashboard() {
    return (
        <div>
            <Navbar/>
            <Card/>
            <Card_2/>

            <Stack spacing={2} direction="column" margin={1}>
                <Link to="/products">
                <Button variant="contained">Show All Products</Button>
                </Link>
            </Stack>


        </div>
    )
}

export default Dashboard;