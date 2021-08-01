import React, {useContext, useEffect, useRef, useState } from 'react' 
import {FaChevronLeft} from 'react-icons/fa'
import {VscKey} from 'react-icons/vsc'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { LOGIN_FORM_SCHEMA } from '../../helpers/Schema'
import {useHistory} from 'react-router-dom'
import { AppContext } from '../../../AppContext';
import { auth as authLogin, fake_auth } from '../../../action/actions';
import {toast} from 'react-toastify'
import Loader from '../../components/Loader'
import das from '../../../assets/das.png'
import './Login.scss'

toast.configure()

function Login() {

    const { state: { auth: { token, role, isLoading }}, dispatch } = useContext(AppContext)
    
    const [checkbox, setCheckbox] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const overlayRef = useRef()
    const history = useHistory()


    const handleSignIn = () => {
        const data = {
            username : email,
            password
        }
        if (checkbox) {
            authLogin(dispatch, 'teacher', data, toast)
        } else {
            authLogin(dispatch, 'student', data, toast)
        }
    }
    const handleCheckbox = (e) => {
        if (e.target) {
            setCheckbox(e.target.checked)
        }
    }

    useEffect(() => {
        if (token && role) {
          history.push(`/${role.toLowerCase()}`)
        }
    }, [token]);

    const { register, handleSubmit, formState : {errors} } = useForm({
        resolver : yupResolver(LOGIN_FORM_SCHEMA)
    })
    return (
        <section className="login__wrapper">
            <div className="login__box">
                <form onSubmit={handleSubmit(handleSignIn)} className="form__sign__in__box">
                    <strong className="login__form__title">Sign In</strong>
                    <div className="login__input__box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email" name="email" placeholder="Email" {...register("email")} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <p className="login__error">{errors.email?.message}</p>
                    </div>
                    <div className="login__input__box">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" {...register("password")} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <p className="login__error">{errors.password?.message}</p>
                    </div>
                    <div className="checkbox_container">
                        <div className="checkbox">
                            <input type="checkbox" onChange={(e)=>handleCheckbox(e)}/>
                            <p>I am a Teacher</p>
                        </div>
                        <p className="pass__forgot__btn" onClick={()=> overlayRef.current.classList.add('show')}>Forgot your password ?</p>
                    </div>
                    {isLoading ?
                        <Loader/>
                        :
                        <button className="sign__in__btn">Sign In</button>
                    }
                </form>
                <form className="form__forgot__pass__box">
                    <div className="back__btn" onClick={()=> overlayRef.current.classList.remove('show')}>
                        <FaChevronLeft className="icon" />
                    </div>
                    <div className="key__icon__container"> <VscKey className="key__icon"/></div>
                    <h1>Forgot Password !</h1>
                    <p>We got your back</p>
                    <input type="email" name="string" placeholder="Username or Email"/>
                    <button className="submit__btn">Reset</button>
                </form>
                <div className="overlay__panel" ref={overlayRef}>
                    <img src={das} alt="logo" />
                    <h1 className="panel__title">Digital Aided School</h1>
                    <p>Enter your personal details and start journey with us</p>
                </div>
            </div>
        </section>
    )
}

export default Login
