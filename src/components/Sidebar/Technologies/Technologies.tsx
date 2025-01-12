// import { useState } from 'react'
import Image from 'next/image'
import { Card } from '../../ui/card'

interface Tech {
  name: string
  icon: string
}

const mainTechs: Tech[] = [
  { name: 'React', icon: 'react' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'PHP', icon: 'php' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'Ant Design', icon: 'antdesign' },
]

// const additionalTechs: Tech[] = [
//   { name: 'Next.js', icon: 'nextjs' },
//   { name: 'TypeScript', icon: 'typescript' },
//   { name: 'Node.js', icon: 'nodejs' },
//   { name: 'MongoDB', icon: 'mongodb' },
//   { name: 'MySQL', icon: 'mysql' },
//   { name: 'CodeIgniter', icon: 'codeigniter' },
//   { name: 'Bootstrap', icon: 'bootstrap' },
//   { name: 'AWS', icon: 'amazonwebservices' },
//   { name: 'Git', icon: 'git' },
//   { name: 'GitHub', icon: 'github' },
//   { name: 'Figma', icon: 'figma' },
// ]

const Technologies = () => {
  // const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='px-6 py-8 bg-slate-100 px[-3] rounded-lg'>
      <div className="flex flex-wrap gap-2">
        {mainTechs.map((tech) => (
          <Card key={tech.name} className='flex items-center p-2 space-x-2'>
            <Image
              aria-hidden
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`}
              width={24}
              height={24}
              alt={`${tech.name} icon`}
            />
            <span className='text-sm font-medium'>{tech.name}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Technologies