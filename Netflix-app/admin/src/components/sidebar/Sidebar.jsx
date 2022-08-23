import './sidebar.css';
import {Link} from "react-router-dom";

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const Sidebar = () => {
    return (

        <div className="sidebar">

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentityIcon className="sidebarIcon"/>
                            Users
                        </li>
                    </Link>
                    <Link to="/movies" className="link">
                        <li className="sidebarListItem">
                            <MovieCreationIcon className="sidebarIcon"/>
                            Movies
                        </li>
                    </Link>
                    <Link to="/lists" className="">
                        <li className="sidebarListItem">
                            <FormatListBulletedIcon className="sidebarIcon"/>
                            Lists
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <BarChartIcon className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutlineIcon className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedIcon className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineIcon className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportIcon className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;