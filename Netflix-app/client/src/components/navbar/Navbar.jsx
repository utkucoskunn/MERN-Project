import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import "./navbar.scss";
import {ArrowDropDown, Notifications, Search} from "@mui/icons-material";
import {AuthContext} from "../../context/authContext/AuthContext";
import {logout} from "../../context/authContext/AuthActions";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {user,dispatch} =useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <Link to='/' className="link"> <span> Homepage </span></Link>
                    <Link to='/series' className="link"> <span className="navbarmainLinks"> Series </span></Link>
                    <Link to='/movies' className="link"> <span className="navbarmainLinks"> Movies </span></Link>

                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>{user.username}</span>
                    <Notifications className='icon'/>
                    <img src={user.profilePic} alt=""/>
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={()=>{dispatch(logout())}}>Logout</span>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Navbar;