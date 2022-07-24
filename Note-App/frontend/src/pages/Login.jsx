import React, {useState} from "react";
import {FaUserCheck} from 'react-icons/fa';


function Login() {
    /*
    formdata ile verileri tuttuğumuz set formData ile  formDatayı kullandığımız useState i oluşturduk.
    form içerisinde nameler ile formdatayı eşleştirdik.
    onChange ile  setFormDatayı çalıştırdık. target ile geleni value içerisine atadık

     */
    const [formData, setFormData] = useState({
        kullaniciAdi: '',
        email: ''
        //form içerisindeki veriler
    })
    const {email, parola} = formData
    const onChange = (e) => {
        setFormData((onceki) => ({
            ...onceki,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    return <>
        <section className='heading'>
            <h1><FaUserCheck/>Giriş Yap
            </h1>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type="email" className='form-control' id="email"
                           name="email" value={email} placeholder="Email Giriniz"
                           onChange={onChange}/>
                </div>
                <div className='form-group'>
                    <input type="password" className='form-control' id="parola"
                           name="parola" value={parola} placeholder="Parola Giriniz"
                           onChange={onChange}/>
                </div>
                <div className='form-group'>
                    <button type="submit" className='btn btn-block'>Giriş</button>
                </div>
            </form>
        </section>
    </>
}

export default Login;