import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import {GrLocation} from 'react-icons/gr'
import {AiOutlineFolderView} from 'react-icons/ai'
import {BsBookFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import config from '../../../common/config';
import axios from 'axios';

const MerchCard: React.FC<MerchCardProps> = (props) => {

  const navigate = useNavigate();
  const [concAddress,setConcAddress] = useState("");
  const [minPrice,setMinPrice] = useState(0);
  const [maxPrice,setMaxPrice] = useState(0);

  useEffect(() => {
    sessionStorage.removeItem('merch_idtoView');
    sessionStorage.removeItem('merch_idtoEdit');
    const address = (
        (props.address?.barangay ? `${props.address.barangay}, ` : '') +
        (props.address?.municipality ? `${props.address.municipality}, ` : '') +
        (props.address?.province ? `${props.address.province}, ` : '') +
        (props.address?.country ? props.address.country : '')
    );
    setConcAddress(address);
    retrievePriceRange();
  }, []); 

  const retrievePriceRange = () =>{
    const merchId = props.merchant_id;
    axios.get(`${config.API}/package/retrieve_price?merch_id=${merchId}`)
    .then((res)=>{
        console.log("RESULT: ",res);
       if(res.data.success === true){
        setMinPrice(res.data.minPrice);
        setMaxPrice(res.data.maxPrice);
       }
    }).catch((err)=>{

    })
  }

  return (
    <div className='flex h-[25vh]'>
        <div>
            <img className='w-[262px] h-[219px] rounded-[50px]' src={props.logo || ''}/>
        </div>

        <div className='ml-[3%] w-[80vw]'>
            <h1 className='font-bold text-[2em]'>{props.merchant_name}</h1>
            <div className='flex'>
                {/* Left Side */}
                <div>
                    <div className='flex'>
                        <Rating value={5} readOnly />
                        <p className='ml-[1%]'>({"reviewCount"} Reviews)</p>
                    </div>
                    <div className='flex items-center mt-[1%] text-[1.1em]'>
                        <GrLocation className='text-[1.3em] mr-[0.5%]'/>
                        {concAddress !== '' ? concAddress : "Coming Soon"}
                    </div>
                    <div className='w-[30vw] pr-[8%]'>
                        <p className='mt-[1.5%] text-[1.1em]'><span className='font-bold mr-[0.5%]'>Description:</span>
                            {props.settings ? props.settings?.description : "Coming Soon!"}</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className=''>
                    <p className='text-[1.1em]'><span className='font-bold mr-[0.5%]'>Price Range:</span>
                            {"₱"+minPrice+" - "+"₱"+maxPrice}</p>
                    <div className='w-[30vw]'>
                        <p className='mt-[1.5%] text-[1.1em]'>
                            <span className='font-bold mr-[0.5%]'>Tags:</span>
                            {props.settings?.tags.map((tag:string, index:number) => (
                                <span key={index} 
                                 className='rounded-3xl bg-[#D9EFFF] border border-[#06F] text-[#06F] mr-[0.5%]
                                            text-[0.8em] py-[0.5%] px-[1%]'>
                                    {tag}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                <div className='flex justify-end mt-[9%] mr-[2%] w-[100%]'>
                    <button className='flex items-center text-white bg-[#FF8A00] mr-[5%] px-[3%] py-[1.5%] rounded-2xl
                        hover:bg-[#FFD8AA] hover:text-black font-medium'
                        onClick={()=>{
                            navigate('/eaterychoice/view')
                            sessionStorage.setItem('merch_idtoView', props.merchant_id.toString());
                        }}>
                        <AiOutlineFolderView className='text-[1.6em]'/>View More
                    </button>
                    <button className='w-[40%] flex items-center text-black bg-[#F4D147] px-[5%] py-[1.5%] rounded-2xl
                        hover:bg-[#FFB800] font-medium'
                        onClick={()=>{
                            navigate('/eaterychoice/book')
                            sessionStorage.setItem('merch_idtoEdit', props.merchant_id.toString());
                        }}>
                        <BsBookFill className='text-[1em] mr-[2%]'/>Book Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MerchCard