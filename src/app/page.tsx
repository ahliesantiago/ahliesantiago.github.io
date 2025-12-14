'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Main/Projects'

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={`min-h-screen ${
        mounted ? (theme === 'light' ? 'bg-white text-black' : 'bg-black text-white') : 'bg-black text-white'
      }`}
    >
      <Navigation />
      <div className='grid grid-cols-4 gap-4 min-h-[90%] my-3 px-5 pt-20 pb-5'>
        <div className='md:h-[calc(90vh)] col-span-4 sm:col-span-2 lg:col-span-1 md:sticky md:top-20 md:self-start'>
          <Sidebar />
        </div>
        <div className='col-span-4 sm:col-span-2 lg:col-span-3'>
          <Projects />
        </div>
      </div>
    </div>
  )
}
