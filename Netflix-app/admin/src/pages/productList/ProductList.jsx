import './productList.css';
import {DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {MovieContext} from '../../context/movieContext/MovieContex'
import {getMovies,deleteMovie} from "../../context/movieContext/apiCalls";

const ProductList = () => {
    const {movies, dispatch} = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch)
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteMovie(id,dispatch);
    };


    const columns = [
        {field: "_id", headerName: "ID", width: 90},
        {
            field: "movie",
            headerName: "Movie",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt=""/>
                        {params.row.title}
                    </div>
                );
            },
        },
        {field: "genre", headerName: "Genre", width: 120},
        {field: "year", headerName: "Year", width: 120},
        {field: "limit", headerName: "Limit", width: 120},
        {field: "isSeries", headerName: "IsSeries", width: 120},
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {

                return (
                    <>
                        <Link to={"/product/" + params.row._id}  state={{movie:params.row}}>
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
                rows={movies}
                disableSelectionOnClick
                columns={columns}
                pageSize={5}
                checkboxSelection
                getRowId={(r)=> r._id}
            />
        </div>
    );
}

export default ProductList;

