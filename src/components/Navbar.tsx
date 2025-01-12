import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { Switch } from '@nextui-org/switch'

interface NavbarProps {
  mode: string
  setMode: (mode: string) => void
}

const Navbar = ({ mode, setMode }: NavbarProps) => {
  const toggleTheme = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <div className='p-3 flex justify-between'>
      <p className='text-4xl'>
        Ahlie&apos;s Portfolio
      </p>
      <div>
        <Button>
          Contact
        </Button>
      </div>
      <Switch
        defaultSelected
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
    </div>
  )
}

export default Navbar