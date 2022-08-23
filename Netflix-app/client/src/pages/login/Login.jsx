import "./login.scss";
import {login} from "../../context/authContext/apiCalls";
import {AuthContext} from "../../context/authContext/AuthContext";
import {useContext, useState} from "react";


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {dispatch} = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();

        login({email, password}, dispatch);

    };

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                         alt=""
                    />

                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Log In</h1>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleLogin}>Log In</button>

                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login;