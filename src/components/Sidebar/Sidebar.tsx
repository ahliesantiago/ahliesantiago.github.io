import { Card, CardContent } from '../ui/card'
import Hello from './Hello'
import About from './About'
import Technologies from './Technologies/Technologies'
import Links from './Links'

const Sidebar = () => {
  return (
    <div className='col-span-4 sm:col-span-2 lg:col-span-1'>
      <Card className='h-full py-5'>
        <CardContent className='h-full grid grid-rows-[auto_1fr_auto] gap-6 px-0'>
          <div className='px-6'>
            <Hello />
            <About />
          </div>
          <Technologies />
          <Links />
        </CardContent>
      </Card>
    </div>
  )
}

export default Sidebar