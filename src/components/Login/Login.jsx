import React, {useState} from 'react'
import styles from './Login.module.css'
import email from '../../assests/img/emailIcon.png'
import password from '../../assests/img/passwordIcon.png'
import google from '../../assests/img/googleIcon.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { googlePopUp, singIn } from '../../firebase/firebaseConfig'

const initialForm = {
    email: '',
    password: ''
}

const Login = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState(initialForm);
    
    const loginWithGoogle = () => {
        googlePopUp()
        .then(res => {
            console.log(res)
            navigate('/SelectPpal')
        })
        .catch(error => {
            console.log(error)
            navigate('/')
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            dateEntry: new Date()
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        singIn(form)
        .then(res => {
            console.log(res)
            navigate('/SelectorPpal')
        })
        .catch(res => console.log(res))
    }



  return (
    <div className={styles.ContainerPrincipal}>
        <div className={styles.LoginContainer}>
        <form  className={styles.LoginContainer} onSubmit={handleSubmit}>
            <h3> ❀ ✿ ❃ ❁ Mis notitas ❀ ✿ ❃ ❁</h3>
            <div className={styles.InputsForm}>
                <img src={email} alt="icon email" />
                <input 
                type="email" 
                placeholder='♡ Ingresa tu email ♡'
                name='email'
                value={form.email}
                onChange={handleChange}
                />
            </div>
            <div className={styles.InputsForm}>
                <img src={password} alt="icon password" />
                <input 
                type="password" 
                placeholder='♡  Ingresa tu contraseña ♡' 
                name='password'
                value={form.password}
                onChange={handleChange}
                />
            </div>
            <input className={styles.ButtonLogin} type="submit" value='❀ Ingresar ❀' onClick={handleSubmit} />
        </form>
        <h3>❤ ♡ O inicia sesión con Google ♡ ❤</h3>
        <button className={styles.ButtonGoogle} onClick={loginWithGoogle}><img src={google} alt="Google" /></button>
        </div>
        
        <Link className={styles.Link} to={'/Register'}>Aún no estás registrado?, Registrate aquí ❀</Link>
    </div>
  )
}

export default Login