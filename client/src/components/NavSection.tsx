import { useState } from 'react';
import jwt_decode from "jwt-decode";

import {DecodedDataInterface} from '../components/DataTypes'
import userplaceholder from '../images/userplaceholderlogo.png'

const NavSection = () => {

  const userInfo = sessionStorage.getItem('userToken');
  const [decodedUserData, updatedecodedUserData] = useState<DecodedDataInterface>();



  useState(()=>{
        if(userInfo){
            const decoded: DecodedDataInterface = jwt_decode(userInfo);
            updatedecodedUserData(decoded)
        }
  }, )


  return (
        <nav className="fixed top-0 left-0 z-20 w-full h-[70px] bg-white flex items-center justify-between px-[2rem] border-b border-b-[#F4F7FC]">
                <h1 className="text-black">MEDHUB</h1>

                <div className="flex items-center space-x-2">
                            <img src = {userplaceholder} alt="profile-icon" className = 'w-[35px] h-[35px] border-inherit rounded-full' />

                            <div className="flex flex-col items-start text-[#ABABAB] text-[15px]">
                                    <p className='text-[13px] text-black tracking-wide'>Good Morning</p>
                                    <p className='text-[13px] font-bold text-[#161616] tracking-wide'>{decodedUserData?.UserName ? decodedUserData.UserName : ''}</p>
                            </div>
                </div>
        </nav>
  ) 
}

export default NavSection