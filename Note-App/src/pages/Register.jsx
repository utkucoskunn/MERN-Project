import React, {useState, useEffect} from "react";
import {FaUser} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import {register, reset} from '../features/auth/authSlice'

function Register() {
    /*
    formdata ile verileri tuttuğumuz set formData ile  formDatayı kullandığımız useState i oluşturduk.
    form içerisinde nameler ile formdatayı eşleştirdik.
    onChange ile  setFormDatayı çalıştırdık. target ile geleni value içerisine atadık

     */

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {kullanici, isHata, isBasari, isYukleniyor, mesaj} = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
        kullaniciAd: '',
        email: '',
        parola: '',
        parolaKontrol: ''
        //form içerisindeki veriler
    })
    const {kullaniciAd, email, parola, parolaKontrol} = formData
    const onChange = (e) => {
        setFormData((onceki) => ({
            ...onceki,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        //console.log(formData);

        if (parola !== parolaKontrol) {
            toast.error('Parolalar eşleşmedi')
        } else {
            const userData = {
                kullaniciAd, email, parola
            }

            dispatch(register(userData))
        }
    }

    useEffect(() => {

        if (isHata) {
            toast.error(mesaj)
        }

        if (isBasari || kullanici) {
            navigate('/')
        }


        dispatch(reset())

    }, [kullanici, isHata, isBasari, mesaj, navigate, dispatch])


    return <>
        <section className='heading'>
            <h1><FaUser/>Üyelik Oluştur
            </h1>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type="text" className='form-control' id="kullaniciAdi"
                           name="kullaniciAdi" value={kullaniciAd} placeholder="Kullancı Ad Giriniz"
                           onChange={onChange}/>
                </div>
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
                    <input type="password" className='form-control' id="parolaKontrol"
                           name="parolaKontrol" value={parolaKontrol} placeholder="Tekrar Parola Giriniz"
                           onChange={onChange}/>
                </div>
                <div className='form-group'>
                    <button type="submit" className='btn btn-block'>Üye Ol</button>
                </div>
            </form>
        </section>
    </>
}

export default Register;