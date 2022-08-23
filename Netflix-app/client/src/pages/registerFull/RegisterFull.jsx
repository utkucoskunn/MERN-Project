import './registerFull.scss';


const registerFull = () => {

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
                    <h1>Sing In</h1>
                    <input
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                     <input
                         type="text"
                        name="username"
                        placeholder="User Name"
                    />
                     <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                    />
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                    />



                    <button className="loginButton">Sıgn In</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default registerFull;