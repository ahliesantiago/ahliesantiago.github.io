'use client'
import { useTheme } from '@/context/ThemeContext'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Main/Projects'

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className={`py-3 px-5 h-screen
      ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      <Navigation />
      <div className='grid grid-cols-4 gap-4 min-h-[90%] my-3'>
        <div className='md:h-[calc(90vh)] col-span-4 sm:col-span-2 lg:col-span-1 md:sticky md:top-20'>
          <Sidebar />
        </div>
        <div className='col-span-4 sm:col-span-2 lg:col-span-3 grid grid-cols-2 gap-2 overflow-auto'>
          <Projects />
        </div>
      </div>
    </div>
  )
}
