import {useNavigate, Outlet} from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useAuth} from "../../contexts/AuthContext";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {user, logout} = useAuth();
    const data = JSON.parse(JSON.stringify(user))
    const navigate = useNavigate();

    const handleLogout = async () => {
        logout();
            await navigate("/", {replace: true});
    };

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
            <nav>
                <div sx={{mt: 20}}>
                    <Stack spacing={2} direction="row" margin={2}>
                        <Button onClick={handleOpen} variant="contained">{data.data.role}  </Button>
                    </Stack>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"

                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Click to sign out!
                            </Typography>
                            <Stack spacing={2} direction="row" margin={2} alignItems={"center"}>
                                <Button variant="contained" color="error" onClick={handleLogout}>Log out</Button>
                            </Stack>
                        </Box>
                    </Modal>
                </div>

            </nav>
            < Outlet/>
        </div>
    )
}

export default Navbar;

