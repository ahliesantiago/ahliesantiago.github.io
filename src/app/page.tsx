'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Main/Projects'
import Banner from '@/components/Banner'
import Contact from '@/components/Main/Contact'

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState<'projects' | 'contact' | null>('projects')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate opacity for banner elements based on scroll
  const bannerOpacity = Math.max(0, 1 - scrollY / 800)
  const arrowOpacity = Math.max(0, 1 - scrollY / 400)
  const navbarVisible = scrollY > window.innerHeight * 0.7
  const contentVisible = scrollY > window.innerHeight * 0.4

  return (
    <div
      className={`min-h-screen ${
        mounted ? (theme === 'light' ? 'bg-white text-black' : 'bg-black text-white') : 'bg-black text-white'
      }`}
    >
      {/* Navigation - hidden initially, slides in from top as banner is scrolled away */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Navigation onNavClick={setActiveSection} />
      </div>

      {/* Banner Section - fades out on scroll */}
      <div
        className="fixed inset-0 z-40"
        style={{
          opacity: bannerOpacity,
          pointerEvents: bannerOpacity > 0 ? 'auto' : 'none',
        }}
      >
        <Banner />
        {/* Arrow with separate opacity control */}
        <div
          className='fixed bottom-20 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300'
          style={{ opacity: arrowOpacity }}
        >
        </div>
      </div>

      {/* Main Content - appears as user scrolls */}
      <div
        className={`relative transition-opacity duration-700 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ paddingTop: '100vh' }}
      >
        <div className='grid grid-cols-4 gap-4 min-h-[90%] my-3 px-5 pt-20 pb-5'>
          <div className='col-span-4 md:col-span-2 lg:col-span-1 md:sticky md:top-28 md:self-start md:max-h-screen'>
            <Sidebar />
          </div>
          <div className='col-span-4 md:col-span-2 lg:col-span-3'>
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'contact' && <Contact />}
          </div>
        </div>
      </div>
    </div>
  )
}
