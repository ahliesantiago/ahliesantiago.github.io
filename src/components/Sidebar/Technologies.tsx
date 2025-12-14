import { useState } from 'react'
import { Button } from '@/components/ui/button'
import TechCard from '@/components/ui/TechCard'

const Technologies = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const mainTechs: string[] = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Tailwind', 'PHP', 'Laravel']
  const additionalTechs: string[] = ['Next.js', 'Node.js', 'CodeIgniter', 'Ruby', 'Ruby on Rails', 'Python', 'Java', 'Spring Boot', 'AWS', 'Docker', 'jQuery', 'Express', 'MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'SQLite', 'DynamoDB', 'GraphQL', 'Git', 'GitHub', 'CSS', 'Bootstrap', 'shadcn', 'Ant Design']

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