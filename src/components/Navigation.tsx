import { Moon, Sun } from 'lucide-react'
import { Switch } from '@nextui-org/switch'
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem,
} from '@nextui-org/navbar'
import { useTheme } from '../context/ThemeContext'


const Navigation = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = (isSelected: boolean) => {
    setTheme(isSelected ? 'light' : 'dark')
  }

  return (
    <Navbar>
      <NavbarBrand>
      <p className='text-4xl'>
        Ahlie&apos;s Portfolio
      </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          Projects
        </NavbarItem>
        <NavbarItem>
          Credentials
        </NavbarItem>
        <NavbarItem>
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