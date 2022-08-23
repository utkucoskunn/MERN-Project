import './user.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import {Link, useLocation} from "react-router-dom";

const User = () => {

    const location = useLocation();
    const user = location.state?.user;





    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">{user.username}</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={user.profilePic}
                            alt=""
                            className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.username}</span>
                            <span className="userShowUserTitle">{user.isAdmin ? "Owner" : "Member"}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Detail</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">{user.fullname}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">{user.createdAt}</span>
                        </div>
                        <span className="userShowTitle">Contact Detail</span>
                        <div className="userShowInfo">
                            <PhoneIphoneIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">{user.phone ? user.phone : "Empty"}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">{user.email ? user.email : "Empty"}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationOnIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle"> {user.address ? user.address : "Empty"}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>User Name</label>
                                <input type="text"
                                       placeholder={user.username}
                                       className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Membership Date</label>
                                <input type="text"
                                       placeholder={user.createdAt}
                                       className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text"
                                       placeholder={user.fullname}
                                       className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text"
                                       placeholder={user.phone ? user.phone : "Empty"}
                                       className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text"
                                       placeholder={user.email ? user.email : "Empty"}
                                       className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text"
                                       placeholder={user.address ? user.address : "Empty"}
                                       className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src={user.profilePic}
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file"><PublishIcon className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;