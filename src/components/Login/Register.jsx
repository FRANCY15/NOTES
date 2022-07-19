import React, {useState} from 'react'
import style from './Register.module.css'
import email from '../../assests/img/emailIcon.png'
import password from '../../assests/img/passwordIcon.png'
import woman from '../../assests/img/mujerIcon.png'
import { useNavigate } from 'react-router-dom'
import { createAcount } from '../../firebase/firebaseConfig'

const initialForm = {
    name: '',
    email: '',
    password: '',
    dateEntry: new Date()
}

const Register = () => {

    const redirection = useNavigate();
    const [formReg, setFormReg] = useState(initialForm);

    const handleChange = (e) => {
        setFormReg({
            ...formReg,
            [e.target.name]: e.target.value,
            dateEntry: new Date()
        })
    };

    const handleSubmit = (e) => {
        createAcount(formReg)
        .then(() => {
            alert('Registro exitoso ❀')
            redirection('/')
            console.log(formReg)
        })
        .catch((error) => {
            console.log(error)
        })
    }



  return (
    <div  className={style.ContainerPrincipal}>
        <form className={style.RegisterContainer} onSubmit={handleSubmit}>
            <h3> ❀ ✿ ❃ ❁ Inicia tu registro ❀ ✿ ❃ ❁</h3>
            <div className={style.InputsForm}>
                <img src={woman} alt="icon woman" />
                <input 
                type="text" 
                placeholder='Ingresa tu nombre completo'
                name='name'
                value={formReg.name}
                onChange={handleChange}
                />
            </div>
            <div className={style.InputsForm}>
                <img src={email} alt="icon email" />
                <input 
                type="email" 
                placeholder='I♡ Ingresa tu email ♡' 
                name='email'
                value={formReg.email}
                onChange={handleChange}
                />
            </div>
            <div className={style.InputsForm}>
                <img src={password} alt="icon password" />
                <input 
                type="password" 
                placeholder='♡  Ingresa tu contraseña ♡' 
                name='password'
                value={formReg.password}
                onChange={handleChange}
                />
            </div>
            <input className={style.ButtonRegister} type="submit" value='❀ Enviar Registro ❀' onClick={(e) => {handleSubmit(e)}}/>
        </form>
    </div>
  )
}

export default Register