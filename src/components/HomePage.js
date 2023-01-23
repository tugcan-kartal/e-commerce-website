import React from 'react'
import DrawIcon from '../static/undraw_web_shopping_re_owap.svg';
import {GiHanger} from 'react-icons/gi';
import {HiOutlineShoppingBag} from 'react-icons/hi';

function HomePage() {
  return (

    <div className='h-[100vh] bg-gray-100'>

        <div className='flex justify-between px-4 py-2'>
            <div><GiHanger size={35}/></div>
            <div><HiOutlineShoppingBag size={30}/></div>
        </div>

        <div className='flex justify-between items-center p-8 py-[10vh]'>

            <div className='flex flex-col gap-y-16'>

                <div className='text-5xl font-bold'>
                    Online <br />Shopping
                </div>

                <div className='text-lg font-light'>
                    If you want to adapt to fashion,
                    <br /> you are in the right place.
                    <br />We are ready to serve you with the most stylish clothes.
                </div>

            </div>



            <div className='w-[50vw]'>

                <img className='w-full' alt='not found' src={DrawIcon} />

            </div>

        </div>

    </div>
  )
}

export default HomePage