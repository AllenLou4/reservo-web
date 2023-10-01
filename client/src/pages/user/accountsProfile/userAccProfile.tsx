import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { useState, useEffect } from 'react';

function UserProfilePage(){ 

    const [account , setAccount] = useState({userID:0,user:"",type:0 });
    const active = localStorage.getItem("userDetails");

    useEffect(() => {
      setTimeout(() => {
        if(active){
            setAccount(JSON.parse(active));
            console.log("setted");
        }
      }, 1000);

    }, [])

    return(
        <div className = "h-[100vh] bg-[#F9F2EA] font-[Poppins]">

            <div className="mx-auto w-[90vw] border-b-[1px] border-black">
                <p className="pt-10 text-[30pt] font-bold">User Information</p>
                <p className="text-[#929090] text-[15pt] font-bold">Protect and Secure Your Account</p>
            </div>

            <div className="m-auto h-[80vh] w-[90vw] mt-7 mb-10 mr-[-5] rounded-3xl bg-white">

                <div>

                    <div className="float-left border-r-[2px] border-black mt-[5vh]">
                        <FaRegUserCircle className="text-[23vh] mx-[15vh] mt-[6vh]"/>
                        <br />
                        <h1 className="text-center font-bold text-[20pt]">Kathea Mari<button><BsFillPencilFill className="ml-1"/></button></h1>
                        <br />
                        <br />
                        <br />
                        <table className='ml-[3vw]'>
                            
                            <tr className="font-[12pt]">
                                <td className="font-bold w-[150px]">Gender:</td>
                                <td className="w-[250px]">Female</td>
                            </tr>
                            <tr className="font-[12pt]">
                                <td className="font-bold w-[150px]">Address:</td>
                                <td className="w-[250px]">123 Sesasmi Street st. , neverland peter pan amazon Cebu City</td>
                            </tr>
                            <tr className="font-[12pt]">
                                <td className="font-bold w-[150px]">BirthDate:</td>
                                <td className="w-[250px]">September 20, 2000</td>
                            </tr>
                            <tr className="font-[12pt]">
                                <td className="font-bold w-[150px]">Age:</td>
                                <td className="w-[250px]">23</td>
                            </tr>
                            <tr className="font-[12pt]">
                                <td className="font-bold w-[150px]">Email:</td>
                                <td className="w-[250px]">Example@example.com</td>
                            </tr>
                            <tr className="font-[12pt]">
                                <td className="font-bold w-[150px]">Phone Number:</td>
                                <td className="w-[250px]">0937 462 5364</td>
                            </tr>
                            <tr>
                                <td><button className="p-[7px] w-[3.2cm] mt-[0.8cm] flex flex-row items-center bg-[#FFA800] rounded-3xl"><MdOutlineLogout className="mr-[0.5cm]"/>Logout</button></td>
                            </tr>
                        </table>

                        
                    </div>
                
                    <div>
                    <h1 className="text-center font-bold text-[22pt] pt-[0.75cm]">Reservation History</h1>
                            <table className="flex flex-col items-center">
                                <thead>
                                    <tr className="text-[15pt] border-b-2 border-black">
                                        <th className="py-1 px-[3vw] text-center">Date</th>
                                        <th className="py-1 px-[3vw] text-center">Time</th>
                                        <th className="py-1 px-[3vw] text-center">Organizer</th>
                                        <th className="py-1 px-[3vw] text-center">Event Size</th>
                                        <th className="py-1 px-[3vw] text-center">Status</th>
                                    </tr>
                                
                                
                                    <tr className="text-[12pt] text-center">
                                        <td className="py-1 px-[1vw] text-center">Jan. 23, 2023</td>
                                        <td className="py-1 px-[1vw] text-center">11:30am - 1:00pm</td>
                                        <td className="py-1 px-[1vw] text-center">Juan Dela Cruz</td>
                                        <td className="py-1 px-[1vw] text-center">5</td>
                                        <td className="py-1 px-[1vw] row flex justify-center items-center"><div className="m-2 bg-[#CCFFD1] text-[#00A310] wx-[50px] ">Done</div></td>
                                    </tr>
                                </thead>
                            </table>
                        
                    </div>

                </div>

            </div>
        </div>
    )
    
}

export default UserProfilePage