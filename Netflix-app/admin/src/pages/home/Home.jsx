import './home.css';

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";


import {useEffect, useMemo, useState} from "react";
import axios from 'axios';

const Home = () => {

    const MONTHS = useMemo(() =>

        [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ], []
    )

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats", {
                    headers: {
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                    },
                });
                res.data.map(item => setUserStats(prev => [...prev, {
                    name: MONTHS[item._id - 1],
                    "New User": item.total
                }]));
            } catch (error) {
                console.log(error);
            }
        };
        getStats();
    }, [MONTHS])

    return (

        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStats} title="User Analytics" dataKey="New User" grid/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>

    )
}

export default Home;