import React,{useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db, logOut } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';


const SelectPpal = () => {

  const navigate = useNavigate()
  const getData = async() => {
    const data = await getDocs(collection(db, 'usuarios'));
    console.log(data.docs)
  }

  const closeSession = () => {
    logOut();
    navigate('/')
  }

  

  return (
    <div>
      <h2>ESTO ES UNA PRUEBA</h2>
      <button onClick={() => getData()}>data</button>
      <button onClick={closeSession}>cerrar sesión</button>
    </div>
  )
}

export default SelectPpal