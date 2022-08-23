import "./register.scss"
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import {emailCheck} from "../../context/authContext/apiCalls";
import {Link} from "react-router-dom";


const Register = () => {

    const navigate = useNavigate();


    const [email, setEmail] = useState();


    const onChange = (e) => {
        setEmail(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()


        const emailCheckResult = emailCheck(email);
        emailCheckResult.then(value => {

            value.length > 0 ? navigate("/login", email) : navigate("/registerfull", email)
        }).catch(error => {
            console.log(error);
        })

    }


    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                         alt=""
                    />
                        <Link to="/login">
                            <button className="loginButton">Log In</button>
                        </Link>

                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    (
                        <div className="input">
                            <input type="email" name="email" id="email" value={email}
                                   placeholder="Email Address" onChange={onChange}/>
                            <button className="registerButton" onClick={onSubmit}>Get Started</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Register;