import "./featured.scss";
import {InfoOutlined, PlayArrow} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Featured = ({type, setGenre}) => {
    const [movie, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,
                    {
                        headers: {
                            Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                        }
                    }
                );
                setContent(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent();
    }, [type])
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>
                        <option value="Animation">Animation</option>
                        <option value="Drama">Drama</option>
                        <option value="Documentary">Documentary</option>
                    </select>
                </div>
            )}


            <img
                src={movie.img}
                alt=""
            />
            <div className="info">
                <img src={movie.imgTitle}
                     alt=""/>
                <span className="desc">
                    {movie.desc}
                </span>
                <div className="buttons">
                    <Link to={"/Watch"} state={{movie}}>
                        <button className="play">
                            <PlayArrow/>
                            <span>Play</span>
                        </button>
                    </Link>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;