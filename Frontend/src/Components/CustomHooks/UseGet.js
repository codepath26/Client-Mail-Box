import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseGet(url) {
  const [ data , setData] = useState(null);
  return (
    useEffect(()=>{
      const getData =async()=>{
        const data = await axios.get(url);
        console.log(data);
      }
      getData();
    })
  )
}

export default UseGet;