import React, { useEffect, useState } from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { TbDeviceDesktop } from "react-icons/tb";
import { RiArrowDropRightFill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom';
import { category } from './category';
import { TiArrowDown } from 'react-icons/ti'
import { AiFillStar } from 'react-icons/ai'
import { IoPersonCircleSharp } from "react-icons/io5";
import Accordion from '../Components/Accordion'
import { category1 } from '../Components/category1'
import { BsEraserFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import BahaModal from './BahaBermek/BahaModal';
import Modal from './BahaBermek/Modal';
import axios from 'axios'
import _ from "lodash";
import Loading from './Loading/Loading';
function Nav() {
  let title = useLocation()
  const [showCat, setShowCat] = useState(true)
  const [nav, setNav] = useState(false)
  const [ratings, setRatings] = useState(false)
  useEffect(() => {
    title.pathname.includes('category') ? setNav(true) : setNav(false)
    title.pathname.includes('ratings') ? setRatings(true) : setRatings(false)
  }, [title.pathname])
  const [showBaha, setShowBaha] = useState(false)
  const profileShow = useSelector(state => state.profileShow.profileShow)
  const handleBaha = () => {
    setShowBaha(true)
  }
  const [data, setData] = useState(null)
  const [loading, setLoading]=useState(true)
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/menu`);
        setData(response.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    getData()
    setLoading(true)
  }, [])
  const [dataRev, setDataRev] = useState(null)
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/site-reviews');
        setDataRev(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])
  return (
    <div className='md:w-2/5 lg:w-1/4 w-full'>
      {
        !profileShow && showBaha && <BahaModal setShowBaha={setShowBaha} />
      }
      {
        profileShow && showBaha && <Modal setShowBaha={setShowBaha} />
      }
      <div
        className='md:mt-5 md:flex hidden container mx-auto mb-1'>
        <section className='w-full md:mr-6 mr-0 flex flex-col'>
          <Link to='/all' className='transition hover:bg-black duration-500 ease-in-out md:flex hidden rounded-t-md items-center p-2 py-3 bg-red-600 w-full text-white font-bold rounded-top-xl'>
            <BsFilterLeft className='lg:ml-5 ml-1 text-2xl' /> <p className='ml-1 text-sm'>AHLI HARYTLAR</p>
          </Link>
          {
            loading && <Loading loading={loading}/>
          }
          {nav && <div onClick={() => setShowCat(!showCat)} className='cursor-pointer mt-2 md:flex hidden items-center px-2 py-2 bg-gray-700 w-full text-white font-bold'>
            <TiArrowDown className='lg:ml-5 ml-1 text-2xl' />
            <p className='text-sm'>KATEGORIYALAR</p>
          </div>}
          {showCat && data &&
            data.map((e,k) => (
              <div key={k} className="relative cursor-pointer md:p-0 bg-white">
                <div className='peer border h-12 border p-2 w-full flex items-center justify-between'>
                  {e.subCategory.length > 0 ? <div className='flex items-center'>
                    <img src={e.imageUrl} className='mr-2 w-10 h-6' /> <p className='text-md'>{e.title}</p>
                  </div> :
                    <Link to={`/category?cat=${e.id}`} className='w-full'>
                      <div className='flex items-center'>
                        <img src={e.imageUrl} className='mr-2 w-10 h-6' /> <p className='text-md'>{e.title}</p>
                      </div>
                    </Link>
                  }
                  {e.subCategory.length > 0 && <RiArrowDropRightFill className='text-3xl opacity-40' />}
                </div>
                {e.subCategory.length > 0 &&
                  <div className='w-full border md:w-72 peer-hover:flex hover:flex hidden md:absolute top-0 -right-72 bg-white z-10'>
                    <div className="flex flex-col w-full m-2">
                      {e.subCategory.map((r,i) => (
                        <div key={i} className='flex items-center hover:bg-gray-200 h-12'>
                          <img src={r.imageUrl} className='mr-1 w-10 h-8' />
                          <Link to={`/category?cat=${e.id}&subCat=${r.id}&title=${r.title}`} className='w-full p-2 text-md'>{r.title}</Link>
                        </div>
                      ))
                      }
                    </div>
                  </div>}
                {/* <div className='w-full h-0.5 bg-gray-500'></div> */}
              </div>
            ))
          }
          {nav &&
            <div className='my-3'>
              {category1.map(data => (
                <Accordion key={data} data={data} />
              ))}
              <div className='text-white flex items-center hover:bg-black transition duration-500 easy-in-out justify-center rounded-3xl mt-2 bg-gray-400 w-full text-center py-1 cursor-pointer'>
                <BsEraserFill className='mr-0.5 text-white' />
                <p>Arassala</p>
              </div>
            </div>
          }
        </section>
      </div >

      {!ratings &&
        <div>
          <p className='md:block hidden text-center my-2 font-bold md:mr-6 mr-0'>
            <Link className='text-black hover:text-red-600' to='/ratings'>TESWIRLER</Link>
          </p>
          <div className='md:block hidden border md:mr-6 mr-0 bg-white pb-2'>
            <div className='flex items-center'>
              <div className='p-2 w-1/2 flex flex-col justify-center'>
                <p className='text-center text-red-600 font-bold text-4xl'>{dataRev && dataRev[2]}</p>
                <div className='flex justify-center'>
                  <AiFillStar className='text-yellow-500' />
                  <AiFillStar className='text-yellow-500' />
                  <AiFillStar className='text-yellow-500' />
                  <AiFillStar className='text-yellow-500' />
                  <AiFillStar className='text-yellow-500' />
                </div>
                <p className='text-center text-gray-500'>({dataRev && dataRev[1]})</p>
              </div>
              <div className='h-20 border bg-black'></div>
              <div className='w-1/2 flex justify-center items-center'>
                <button onClick={() => handleBaha()} className='py-2 px-1 text-red-600 transition duration-500 ease-in-out hover:text-white hover:bg-red-600 border border-red-600'>Baha berin</button>
              </div>
            </div>
            <div className=''>
              <div className='w-11/12 mx-auto bg-gray-300' style={{ height: '1px' }}></div>

              <div className='w-11/12 mx-auto bg-gray-300' style={{ height: '1px' }}></div>
              {dataRev && dataRev[0].map((e,o) => (
                <div key={o}>
                  <div className='mt-2 flex pl-3 items-center'>
                    {_.times(e.stars, () => (
                      <AiFillStar className='text-yellow-500' />
                    ))}
                    <p className='text-sm ml-2'>{e.status}</p>
                  </div>
                  <div className='flex items-center pl-3'>
                    <IoPersonCircleSharp className='mr-1 text-lg text-gray-400' />
                    <p className='text-sm font-bold'>{e.name}</p>
                  </div>
                  <p className='pl-3 text-sm'>{e.review}</p>
                  <div className='w-11/12 my-2 mx-auto bg-gray-300' style={{ height: '1px' }}></div>
                </div>
              ))}

              <Link to='/ratings'>
                <p className='mx-2 rounded text-center py-1.5 px-1 transition duration-500 ease-in-out text-white hover:bg-black bg-red-600 '>
                  Ahli teswirler
                </p>
              </Link>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Nav
