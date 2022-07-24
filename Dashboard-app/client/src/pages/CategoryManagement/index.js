import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function createData(
    SubName: string,
    ParentName: string,
    Button: Button,
) {
    return {SubName, ParentName,Button};
}

const rows = [
    createData('Mobile Phone', 'Technology',<Button sx={{ mx:"center" }} variant="contained" color="success">EDİT </Button> ),
    createData('Smart Watch', 'Technology', <Button sx={{ mx:"center" }} variant="contained" color="success">EDİT </Button>),

];


function CategoryManagement() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /*const handleLogout = async () => {
        logout();
        await navigate("/", {replace: true});
    };*/

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        justifyItems: 'center'
    };
    return (
        <div>
            <Navbar/>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div>
                        <Stack spacing={2} direction="row" margin={2}>
                            <Button sx={{ mx:"auto" }} onClick={handleOpen} variant="contained">Add Parent Category </Button>
                        </Stack>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"

                        >
                            <Box sx={style}>
                                <Typography sx={{ mx:"auto" }} id="modal-modal-title" variant="h6" component="h2">
                                    Add Parent Category!
                                </Typography>
                                <Stack spacing={2} direction="row" margin={2} alignItems={"center"}>
                                    <Button sx={{ mx:"center" }} variant="contained" color="success">Add </Button>
                                </Stack>
                            </Box>
                        </Modal>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div>
                        <Stack spacing={2} direction="row" margin={2}>
                            <Button sx={{ mx:"auto" }} onClick={handleOpen} variant="contained">Add Sub Category </Button>
                        </Stack>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"

                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Add Sub Category!
                                </Typography>
                                <Stack spacing={2} direction="row" margin={2} alignItems={"center"}>
                                    <Button variant="contained" color="success">Add </Button>
                                </Stack>
                            </Box>
                        </Modal>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{maxWidth: 1000, mx:"auto" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Sub Category Name</TableCell>
                                    <TableCell align="left">Parent Category Name</TableCell>
                                    <TableCell align="left">Action</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.SubName}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.ParentName}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.Button}
                                        </TableCell>


                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}

export default CategoryManagement;