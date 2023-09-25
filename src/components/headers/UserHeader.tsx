import React,{useState } from 'react'
import logo from '../../assets/temp-logo.png'
import {BiSolidUserCircle} from 'react-icons/bi'
import {AiOutlineDown} from 'react-icons/ai'
import {RiLoginCircleFill} from 'react-icons/ri'

const UserHeader = () => {
  const [showMenu,setShowMenu] = useState(false);

  return (
    <div className='font-poppins flex bg-white text-white h-[6rem]'>
        <div className='w-[63%]'>
          <img src={logo} alt='Reservo Logo' className='ml-[5%] my-[1%] w-[15%]'/>
        </div>
        <div className='w-[30%] flex items-center'>
          <nav>
            <ul className='flex text-[1.2em] text-black'>
              <li className='mr-28 hover:text-[#DD2803] cursor-pointer hover:animate-zoom-in-end'>Home</li>
              <li className='mr-28 hover:text-[#DD2803] cursor-pointer hover:animate-zoom-in-end'>About Us</li>
              <li className='hover:text-[#DD2803] cursor-pointer hover:animate-zoom-in-end'>Eatery Choices</li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center relative'>
          <BiSolidUserCircle className='text-black text-[2.5em]'/> {/*To be changed*/}
          <AiOutlineDown className='text-black mt-[6%] ml-[6%] text-[1.3em] hover:cursor-pointer hover:text-[#DD2803]'
           onClick={()=>{setShowMenu(!showMenu)}}/>
          {showMenu && 
            <div className='absolute h-[11vh] w-[6vw] left-0 bg-white text-black block top-[100%] animate-slide-down'>
              <ul className='list-none pl-[15%]'>
                <li><hr className="w-[85px] pt-[10%]"/></li>
                <li className='pb-[10%]'>Hi, Guest!</li>
                <li><hr className="w-[85px] pt-[10%]"/></li>
                {/* <li className='hover:text-[#DD2803] cursor-pointer'>About Us</li> */}

                <li className='flex hover:text-[#DD2803] cursor-pointer py-[8%] hover:animate-zoom-in'>Log In<RiLoginCircleFill className='ml-[2%] mt-[2%] text-[1.3em]'/></li> 
              </ul>
            </div>
          }
        </div>
    </div>
  )
}

export default UserHeader