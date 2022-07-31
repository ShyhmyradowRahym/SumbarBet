import React, { useEffect, useState } from 'react'
import SliderMain from '../Components/SliderMain'
import SliderMain1 from '../Components/SliderMain1'
import { RiArrowDropRightFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
import { IoPersonCircleSharp } from "react-icons/io5";
import { data } from '../Components/data'
import AOS from 'aos';
import "aos/dist/aos.css";
import Monitor from '../Components/Monitor'
import Notebooks from '../Components/Notebooks'
import Products from './Products'
import { Link } from 'react-router-dom'
import RecommendTab from './main-page/RecommendTab'
import NewTab from './main-page/NewTab'
import PopularTab from './main-page/PopularTab'
import Router from './Main-Category/Router'
import Plata from './Main-Category/Plata'
import WideoKarta from './Main-Category/WideoKarta'
import MobilPeriferiya from './Main-Category/MobilPeriferiya'
import Gulaklyklar from './Main-Category/Gulaklyklar'
import Kalonkalar from './Main-Category/Kalonka'
function Home() {
    const [menu, setMenu] = useState(0)
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, []);
    return (
        <div className='md:w-3/4 w-full md:mt-5 mt-0'>
            <SliderMain />
            <SliderMain1 />
            <div className='w-full my-3'>
                <ul className='flex justify-center flex-wrap'>
                    <li onClick={() => setMenu(0)} className={menu === 0 ? 'border-b-2 border-red-600 mx-4 font-bold text-lg text-red-600' : 'cursor-pointer mx-4 font-bold text-lg'}>MASLAHAT BERILYANLER</li>
                    <li onClick={() => setMenu(1)} className={menu === 1 ? 'border-b-2 border-red-600 mx-4 font-bold text-lg text-red-600' : 'cursor-pointer mx-4 font-bold text-lg'}>TAZELER</li>
                    <li onClick={() => setMenu(2)} className={menu === 2 ? 'border-b-2 border-red-600 mx-4 font-bold text-lg text-red-600' : 'cursor-pointer mx-4 font-bold text-lg'}>MESHURLAR</li>
                </ul>
            </div>
            {menu===0 && <RecommendTab />}
            {menu===1 && <NewTab />}
            {menu===2 && <PopularTab />}
            <div className='pb-4'>
                <Router />
            </div>
            <div className='pb-4'>
                <Plata />
            </div>
            <div className='pb-4'>
                <WideoKarta />
            </div>
            <div className='pb-4'>
                <MobilPeriferiya />
            </div>
            <div className='pb-4'>
                <Gulaklyklar />
            </div>
            <div className='pb-4'>
                <Kalonkalar />
            </div>
            <div className='md:hidden block'>
                <p className='md:hidden block text-center my-2 font-bold md:mr-6 mr-0'>
                    <Link className='text-black hover:text-red-600' to='/ratings'>TESWIRLER</Link>
                </p>
                <div className='border md:mr-6 mr-0 bg-white pb-2'>
                    <div className='flex items-center'>
                        <div className='p-2 w-1/2 flex flex-col justify-center'>
                            <p className='text-center text-red-600 font-bold text-4xl'>5.0</p>
                            <div className='flex justify-center'>
                                <AiFillStar className='text-yellow-500' />
                                <AiFillStar className='text-yellow-500' />
                                <AiFillStar className='text-yellow-500' />
                                <AiFillStar className='text-yellow-500' />
                                <AiFillStar className='text-yellow-500' />
                            </div>
                            <p className='text-center text-gray-500'>(25)</p>
                        </div>
                        <div className='h-20 border bg-black'></div>
                        <div className='w-1/2 flex justify-center items-center'>
                            <button className='py-2 px-1 text-red-600 transition duration-500 ease-in-out hover:text-white hover:bg-red-600 border border-red-600'>Baha berin</button>
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-11/12 mx-auto bg-gray-300' style={{ height: '1px' }}></div>
                        <div className='mt-2 flex pl-3 items-center'>
                            <AiFillStar className='text-yellow-500' />
                            <AiFillStar className='text-yellow-500' />
                            <AiFillStar className='text-yellow-500' />
                            <AiFillStar className='text-yellow-500' />
                            <AiFillStar className='text-yellow-500' />
                            <p className='text-sm ml-2'>Örän gowy</p>
                        </div>
                        <div className='flex items-center pl-3'>
                            <IoPersonCircleSharp className='mr-1 text-lg text-gray-400' />
                            <p className='text-sm font-bold'>Hezret</p>
                        </div>
                        <p className='pb-2 pl-3 text-sm'>Tuweleme bahalar gowy cykyar</p>
                        <div className='w-11/12 mx-auto bg-gray-300' style={{ height: '1px' }}></div>
                        <div className='mt-2 flex pl-3 items-center'>
                            <AiFillStar className='text-yellow-500' />
                            <AiFillStar className='text-yellow-500' />
                            <AiFillStar className='text-yellow-500' />
                            <AiFillStar className='text-yellow-500' />
                            <AiFillStar className='text-yellow-500' />
                            <p className='text-sm ml-2'>Örän gowy</p>
                        </div>
                        <div className='flex items-center pl-3'>
                            <IoPersonCircleSharp className='mr-1 text-lg text-gray-400' />
                            <p className='text-sm font-bold'>Serdar</p>
                        </div>
                        <p className='pl-3 text-sm'>Tuweleme !!! Juda gowy !</p>
                        <div className='w-11/12 my-2 mx-auto bg-gray-300' style={{ height: '1px' }}></div>

                        <Link to='/ratings'>
                            <p className='mx-2 rounded text-center py-1.5 px-1 transition duration-500 ease-in-out text-white hover:bg-black bg-red-600 '>
                                Ahli teswirler
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
