import './listList.css';
import {DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom';
import {useContext, useEffect} from "react";
import {ListContext} from '../../context/listContext/ListContex';
import {getLists, deleteList} from "../../context/listContext/apiCalls";

const ListList = () => {
    const {lists, dispatch} = useContext(ListContext);

    useEffect(() => {
        getLists(dispatch)
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteList(id,dispatch);
    };


    const columns = [
        {field: "_id", headerName: "ID", width: 250},
        {field: "title", headerName: "title", width: 250},
        {field: "genre", headerName: "Genre", width: 150},
        {field: "type", headerName: "type", width: 150},
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {

                return (
                    <>
                        <Link to={"/lists/" + params.row._id}  state={{list:params.row}}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={lists}
                disableSelectionOnClick
                columns={columns}
                pageSize={5}
                checkboxSelection
                getRowId={(r)=> r._id}
            />
        </div>
    );
}

export default ListList;

