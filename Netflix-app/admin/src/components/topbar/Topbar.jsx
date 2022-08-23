import React, {useContext} from "react";
import "./topbar.css";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import {AuthContext} from "../../context/authContext/AuthContext";
import {logout} from "../../context/authContext/AuthActions";

export default function Topbar() {
    const {user,dispatch} =useContext(AuthContext);
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Page</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                            <span onClick={()=>{dispatch(logout())}}>Logout</span>
                    </div>

                    <img
                        src={user.profilePic}
                        className="topAvatar"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}