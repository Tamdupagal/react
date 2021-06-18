import React, {useContext, useEffect, useRef, useState } from 'react' 
import {FaChevronLeft} from 'react-icons/fa'
import {VscKey} from 'react-icons/vsc'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { LOGIN_FORM_SCHEMA } from '../../helpers/Schema'
import {useHistory} from 'react-router-dom'

import './Login.scss'
import { AppContext } from '../../AppContext';
import { fakeAuth } from '../../action/actions';
import ReactLoading from 'react-loading';
import das from '../../assets/das.png'

function Login() {

    const { state: { auth }, dispatch } = useContext(AppContext)
    const [checkBox, setCheckBox] = useState(false)
    const overlayRef = useRef()
    const history = useHistory()

    console.log(auth.token)

    const handleSignIn = (data) => {
        fakeAuth(dispatch)
    }
    const handleCheckbox = (e) => {
        if (e.target) {
            setCheckBox(e.target.checked)
        }
    }
    useEffect(() => {
        if (auth.token) {
            if (checkBox) {
                history.push('/teacher')
            } else {
                history.push('/student') 
            }
        }
    }, [auth.token])

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
                        <input type="email" name="email" placeholder="Email" {...register("email")}/>
                        <p className="login__error">{errors.email?.message}</p>
                    </div>
                    <div className="login__input__box">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" {...register("password")} />
                        <p className="login__error">{errors.password?.message}</p>
                    </div>
                    <div className="checkbox_container">
                        <div className="checkbox">
                            <input type="checkbox" onChange={(e)=>handleCheckbox(e)}/>
                            <p>I am a Teacher</p>
                        </div>
                        <p className="pass__forgot__btn" onClick={()=> overlayRef.current.classList.add('show')}>Forgot your password ?</p>
                    </div>
                    {auth.isLoading ?
                        <ReactLoading type='spin' color='blue' height={30} width={30} />
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
