'use client'
import { useTheme } from '@/context/ThemeContext'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Main/Projects'

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className={`py-3 px-5 h-screen
      ${theme === 'light' ? 'bg-white text-black'
        : 'bg-black text-white'
      }`}
    >
      <Navigation />
      <div className='grid grid-cols-4 gap-4 h-[90%] my-2'>
        <Sidebar />
        <Projects />
      </div>
    </div>
  )
}
