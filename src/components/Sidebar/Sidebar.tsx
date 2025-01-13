import { Card, CardContent } from '../ui/card'
import Hello from './Hello'
import About from './About'
import Technologies from './Technologies'
import Links from './Links'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <Card className='py-5'>
      <CardContent className='h-full grid gap-3 px-0'>
        <div className='relative w-full h-64 flex justify-center items-center'>
          <Image
            aria-hidden
            src='https://placehold.co/600x400?text=To+Be+Added'
            width={400}
            height={400}
            alt='Photo of me at my desk'
          />
        </div>
        <div className='px-6'>
          <Hello />
          <About />
        </div>
        <div className='overflow-y-scroll'>
          <Technologies />
        </div>
        <Links />
      </CardContent>
    </Card>
  )
}

export default Sidebar