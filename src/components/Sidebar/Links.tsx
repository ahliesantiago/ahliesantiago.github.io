import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

const Links = () => {
  const { theme } = useTheme()
  
  return (
    <div className='flex flex-wrap gap-4 items-center justify-center px-6 py-3'>
      <a
        href='https://www.linkedin.com/in/ahliesantiago/'
        target='_blank' rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'
          alt='LinkedIn icon'
          width={36}
          height={36}
          className='hover:scale-150'
        />
      </a>
      <a
        href='https://github.com/ahliesantiago'
        target='_blank' rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src={`https://cdn.simpleicons.org/github/000000${theme === 'dark' && '/ffffff'}`}
          alt='GitHub icon'
          width={36}
          height={36}
          className='hover:scale-150'
        />
      </a>
    </div>
  )
}

export default Links