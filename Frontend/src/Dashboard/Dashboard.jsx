import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

export default function Dashboard(){
const navigate = useNavigate();
const[data, setData ] = useState({});

useEffect(()=>{
  async function fetchUser(){
    try{
    const res = await axios.get('/resume/api/v1/user/user');
    setData(res.data.data)
    navigate('/');
  }catch(err){
    navigate('/home')
  }
}

fetchUser()
},[])

  return(
    <>
      <Navbar name={data.fullName}/>
      <h1>hi</h1>
    </>
    )
}