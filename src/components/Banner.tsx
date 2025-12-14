'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Photo from '../../public/assets/images/Desk.jpeg'
import { ChevronDown } from 'lucide-react'

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Image with Transparency */}
      <div className='absolute inset-0 opacity-30'>
        <Image
          src={Photo}
          alt='Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Solid overlay on the right */}
      <div className='absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-current via-current/80 to-transparent opacity-20' />

      {/* Main Content */}
      <div className='relative z-10 flex items-center justify-center w-full max-w-6xl px-8'>
        {/* Left Side - Wave and Text */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 text-5xl md:text-7xl lg:text-8xl font-bold'>
          <span className='animate-wave inline-block origin-[70%_70%]'>👋</span>
          <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Hi! I&apos;m Ahlie
          </span>
        </div>
      </div>

      {/* Arrow */}
      <div className='absolute bottom-20 animate-bounce-slow'>
        <ChevronDown className='w-12 h-12 opacity-70' />
      </div>
    </div>
  )
}

export default Banner
