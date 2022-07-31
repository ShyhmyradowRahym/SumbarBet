import React, { useEffect, useState } from 'react'
import { RiArrowDropRightFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Products from '../Products'
import axios from 'axios'
import Loading from '../../Components/Loading/Loading'
const Kalonkalar = () => {
    const [data, setData]=useState(null)
    const [loading, setLoading]=useState(true)
    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('/main-page/categories?category=3&subCategory=20');
                setData(response.data)
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        getData()
        setLoading(true)
    }, [])
    return (
        <div className='w-full'>
            <div className='w-full flex justify-center items-center my-2'>
                <Link to='/category?cat=3&subCat=20&title=pokratiw kolonkalar' className='flex items-center hover:text-red-600'>
                    <RiArrowDropRightFill className='text-4xl' />
                    <h1 className='md:text-xl md:font-bold'>PORTATIW KOLONKALARY</h1>
                </Link>
            </div>
            {loading ? <Loading loading={loading} />: <div className='w-full grid grid-cols-2 grid-gap-2 sm:grid-cols-3 sm:grid-gap-3 md:grid-cols-2 md:grid-gap-2 lg:grid-cols-3 lg:grid-gap-3 xl:grid-cols-4 xl:grid-gap-4'>
                {data && data.map(e => (
                    <Products e={e} key={e.id} />
                ))
                }
            </div>}
        </div>
    )
}

export default Kalonkalar