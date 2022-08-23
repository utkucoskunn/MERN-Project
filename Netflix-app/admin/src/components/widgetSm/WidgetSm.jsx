import "./widgetSm.css";

import VisibilityIcon from '@mui/icons-material/Visibility';
import {useEffect, useState} from "react";
import axios from "axios";

const WidgetSm = () => {

    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                    },
                });
                setNewUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getNewUsers();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user,index) => (
                    <li key={index} className="widgetSmListItem">
                        <img
                            src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <VisibilityIcon/>
                            Display
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}
export default WidgetSm;


