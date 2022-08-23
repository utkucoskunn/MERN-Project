import "./watch.scss"
import {ArrowBackIosNewOutlined} from "@mui/icons-material";
import {useLocation, Link} from "react-router-dom";


const Watch = () => {

    const location = useLocation();
    const movie = location.state.movie;



    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackIosNewOutlined/>
                    Home
                </div>
            </Link>
             <video className="video" autoPlay  controls src={movie.video}/>
        </div>
    )
}

export default Watch;

