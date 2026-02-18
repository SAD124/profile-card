import ProfileCard from '@/components/ProfileCard'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <ProfileCard
        name="Sadia Omer"
        role="Frontend Developer"
        location="Pakistan"
        rating="4.9"
        imageUrl="https://i.pravatar.cc/100"
      />
    </div>
  )
}

export default Home