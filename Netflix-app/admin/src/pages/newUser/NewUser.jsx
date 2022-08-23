import './newUser.css';
import {useContext, useState} from "react";
import storage from "../../firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {createUser} from "../../context/userContext/apiCalls";
import {UserContext} from "../../context/userContext/UserContext";
import {useNavigate} from "react-router-dom";


const NewUser = () => {
    const {dispatch} = useContext(UserContext);

    const [user, setUser] = useState(null);
    const [img, setImg] = useState(null);
    const [uploaded, setUploaded] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    }

    const upload = (images) => {


        images.forEach((image) => {
            const fileName = new Date().getTime() + image.label + image.file.name;

            const storageRef = ref(storage, `/users/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, image.file);


            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                },
                (error) => {
                    console.log(error);
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        setUser((user) => {
                            return {...user, [image.label]: downloadURL};
                        });
                        setUploaded((uploaded) => uploaded + 1);
                    });
                }
            );
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            {file: img, label: "profilePic"},
        ])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpload(e);
        createUser(user, dispatch);
        navigate("/users");
    }
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>User Name</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="User Name"
                        onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Phone Number</label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                    />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" onChange={handleChange}/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={handleChange}/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" onChange={handleChange}/>
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Admin</label>
                    <select className="newUserSelect" name="isAdmin" id="active" onChange={handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Image</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={e => setImg(e.target.files[0])}/>
                </div>

                {uploaded === 1 ? (
                    <button className="newUserButton" onClick={handleSubmit}>
                        Create
                    </button>
                ) : (
                    <button className="newUserButton" onClick={handleUpload}>
                        Upload
                    </button>
                )}
            </form>
        </div>
    )
}

export default NewUser;