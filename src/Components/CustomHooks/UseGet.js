import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseGet() {
  const [ data , setData] = useState(null);
  return (
    useEffect(()=>{
      const getData =async()=>{
        const data = await axios.get(`${process.env.REACT_APP_FIREBASE_URL}email.json`);
        console.log(data);
      }
      getData();
    })
  )
}

export default UseGet;