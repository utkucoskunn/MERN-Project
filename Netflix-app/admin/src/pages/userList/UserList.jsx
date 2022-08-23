import './userList.css';
import {DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link, useNavigate} from 'react-router-dom';
import {UserContext} from '../../context/userContext/UserContext';
import {useContext, useEffect} from "react";
import {deleteMovie, getUsers} from '../../context/userContext/apiCalls';


const UserList = () => {
    const navigate = useNavigate();
    const {users, dispatch} = useContext(UserContext);
    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch]);


    const handleDelete = (id) => {

        deleteMovie(id, dispatch);
    }

    const columns = [
        {field: '_id', headerName: 'ID', width: 200},
        {
            field: 'user', headerName: 'Profile Picture', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.profilePic} alt=""/>
                        {params.row.userName}
                    </div>
                )
            }
        },

        {field: 'username', headerName: 'User Name', width: 200},
        {field: 'email', headerName: 'Email', width: 200},
        {field: 'isAdmin', headerName: 'Status', width: 120},
        {
            field: "action", headerName: "Action", width: 150, renderCell: (params) => {
                return (
                    <>

                        <Link to={"/user/" + params.row._id} state={{user: params.row}}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="userListDelete" onClick={() =>
                            handleDelete(params.row._id)}/>
                    </>
                )
            }
        },
    ];


    return (

        <div className="userList">
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    getRowId={(r) => r._id}
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}

export default UserList;