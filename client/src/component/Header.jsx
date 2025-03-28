import React from 'react';
import { FaEarthAmericas, FaCalendarCheck } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";import { IoMdAirplane, IoIosPricetags, IoIosGift  } from "react-icons/io";
import { MdAirplaneTicket, MdOutlinePets  } from "react-icons/md"; 
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiCalendarStarFill, PiSeatFill, PiAirplaneInFlightFill } from "react-icons/pi";
import { FaUtensils, FaEarthAsia  } from "react-icons/fa"; 
import { BsSuitcase2Fill } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { LuPackagePlus, LuHeartHandshake } from "react-icons/lu"; 
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const handleNav=(path)=>{ 
        navigate(path);
    }

    return ( 
        <>
        <div className='header_outline'>
            <div className='header'>
            <div className='header_content'>
                <div className='header_top'>
                    <div className='header_top_menu'>
                        <button><span> 로그인·회원가입</span></button>
                        <button><span>고객센터</span></button>
                        <button><span><FaEarthAmericas /></span><span style={{paddingLeft:"5px"}}>한국(한국어)/KRW</span></button>
                    </div>
                    <div className='header_bottom_menu'>
                    <div className='home_main_logo'
                    onClick={()=> handleNav('/')}>
                        <img src="https://images.jinair.com/newHom/images/web/common/logo.svg" alt="jinair-logo" />
                    </div>
                        <div className='menu_list'>
                            <ul>
                                <li>예약</li>
                                <li>프로모션/제휴</li>
                                <li>부가서비스</li>
                                <li>운항정보</li>
                                <li><HiOutlineBars3 /> 전체메뉴</li>
                            </ul>
                        </div>
                        <div><CiUser /></div>
                        <div><CiUser /></div>
                        <div><CiUser /></div>

                    </div> 
                </div>
                </div>
            <div className='header_bottom'> 
            </div> 

            </div>
            </div> 
        </>
    );
}

