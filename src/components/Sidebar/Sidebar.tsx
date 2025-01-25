import { Card, CardContent } from '../ui/card'
import Hello from './Hello'
import About from './About'
import Links from './Links'
import Image from 'next/image'
import TechButton from './TechButton'
import Photo from '../../../public/assets/images/Desk.jpeg'

const Sidebar = () => {
  return (
    <Card className='py-5'>
      <CardContent className='h-full grid gap-3 px-0 py-0'>
        <div className='relative w-full h-64 flex justify-center items-center'>
          <Image
            aria-hidden
            src={Photo}
            width={600}
            height={400}
            className='object-cover w-full h-full'
            alt='workspace snap'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-end px-6'>
            <Hello />
            <TechButton />
          </div>
          <About />
        </div>
        <Links />
      </CardContent>
    </Card>
  )
}

export default Sidebar