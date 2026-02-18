import Image from 'next/image'
import React from 'react'

const ProfileCard = ({name, role, location, rating, imageUrl}) => {
  return (
    <div className='w-80 bg-white rounded-2xl shadow-lg overflow-hidden relative'>
        {/* top-gradient-section */}
        <div className='h-24 bg-gradient-to-r from-indigo-500 to-purple-500'></div>

        {/* profile-image */}
        <div className='absolute left-1/2 transform -translate-x-1/2 top-10'>
            <Image src={imageUrl} alt={name} width={80} height={80} className='rounded-full border-4 border-white'/>
        </div>

        {/* content-section */}
        <div className='p-6 text-center'>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p className='text-sm text-gray-500'>{role}</p>
        </div>

        {/* info */}
        <div className='flex justify-center items-center space-x-4 text-gray-500 text-sm'>
            <div className='flex items-center space-x-1'>
                <span>📍</span>
                <span>{location}</span>
            </div>
            <div className='flex items-center space-x-1'>
                <span>⭐</span>
                <span>{rating}</span>
            </div>
        </div>

        {/* buttons */}
        <div className='flex justify-center space-x-4 my-5'>
            <button className='px-4 py-1 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition'>Follow</button>
            <button className='px-4 py-1 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition'>Message</button>
        </div>
    </div>
  )
}

export default ProfileCard