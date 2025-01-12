'use client'
import { useState } from 'react'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'

export default function Home() {
  const [mode, setMode] = useState('light')

  return (
    <div className={`py-3 px-5 h-screen
      ${mode === 'light' ? 'bg-white text-black'
        : 'bg-black text-white'
      }`}
    >
      <Navbar mode={mode} setMode={setMode} />
      <div className='grid grid-cols-4 gap-6 h-[90%] my-2'>
        <Sidebar />
        <main>
          Projects
        </main>
      </div>
    </div>
  )
}
