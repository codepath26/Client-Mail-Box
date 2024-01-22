import React from 'react'
import { useNavigate } from 'react-router-dom';

function TopBack(props) {
  const navigate =useNavigate();
  return (
    <div className="border  p-2">
      <div className='w-[80%]  mx-auto  flex md:justify-between flex-col items-center gap-2 md:flex-row'>
      <div>
    <h1 className="text-[#6b21a8] text-[30px] text-center   w-[100%]">Welcome To Your {props.name}</h1>
      </div>
      <div>
    <button className=" bg-[#6b21a8] text-white px-4 py-1 border-none rounded" onClick={() => navigate("/main")}>
     Compose
    </button>
      </div>
      </div>
    </div>
  )
}

export default TopBack;