import { useState } from 'react'
import { Button } from '@/components/ui/button'
import TechCard from '@/components/ui/TechCard'

const Technologies = () => {
  const [isExpanded, setIsExpanded] = useState(false)  
  const mainTechs: string[] = ['JavaScript', 'React', 'Tailwind', 'PHP', 'Laravel', 'Ant Design']
  const additionalTechs: string[] = [ 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'MySQL', 'Ruby', 'Ruby on Rails', 'CodeIgniter', 'AWS', 'Git', 'GitHub', 'Bootstrap', 'shadcn', 'Figma']

  return (
    <div className='flex flex-wrap gap-2'>
      {mainTechs.map((techName) => (
        <TechCard key={techName} techName={techName} />
      ))}

      {isExpanded && additionalTechs.map((techName) => (
        <TechCard key={techName} techName={techName} />
      ))}

      <Button
        variant='outline'
        onClick={() => setIsExpanded(!isExpanded)}
        className='h-10 rounded-lg text-sm md:text-md border border-gray-200 bg-transparent'
      >
        {isExpanded ? 'less...' : 'more...'}
      </Button>
    </div>
  )
}

export default Technologies