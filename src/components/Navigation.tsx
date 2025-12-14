import { Moon, Sun } from 'lucide-react'
import { Switch } from '@nextui-org/switch'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import { useTheme } from '../context/ThemeContext'


const Navigation = ({ onNavClick }: { onNavClick: (section: 'projects' | 'contact') => void }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = (isSelected: boolean) => {
    setTheme(isSelected ? 'light' : 'dark')
  }

  return (
    <Navbar className='py-2 border-b-1 border-b-gray-400'>
      <NavbarBrand className='cursor-pointer' onClick={() => onNavClick('projects')}>
        <p className='text-3xl italic font-[family-name:var(--font-geist-mono)]'>
          Ahlie&apos;s Portfolio
        </p>
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-28' justify='center'>
        <NavbarItem className='cursor-pointer' onClick={() => onNavClick('projects')}>
          Projects
        </NavbarItem>
        <NavbarItem className='cursor-pointer' onClick={() => onNavClick('contact')}>
          Contact
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <Switch
          isSelected={theme === 'light'}
          color='warning'
          size='lg'
          thumbIcon={({isSelected, className}) =>
            isSelected ? (
              <Sun className={`${className} text-yellow-500`} />
            ) : (
              <Moon className={`${className} text-blue-500`} />
            )
          }
          onValueChange={toggleTheme}
        >
        </Switch>
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation