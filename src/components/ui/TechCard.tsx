import Image from 'next/image'
import { Card } from '../ui/card'
import { useTheme } from '@/context/ThemeContext'
import { useFilter } from '@/context/FilterContext'

interface Tech {
  name: string
  icon: string
  isDark?: boolean
  specificIcon?: string
}

const technologies: Tech[] = [
  { name: 'AWS', icon: 'amazonwebservices', specificIcon: 'amazonwebservices-plain-wordmark' },
  { name: 'Ant Design', icon: 'antdesign' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'CodeIgniter', icon: 'codeigniter', specificIcon: 'codeigniter-plain' },
  { name: 'Docker', icon: 'docker' },
  { name: 'DynamoDB', icon: 'dynamodb' },
  { name: 'Express', icon: 'express', isDark: true },
  { name: 'Figma', icon: 'figma' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github', isDark: true },
  { name: 'GraphQL', icon: 'graphql', specificIcon: 'graphql-plain' },
  { name: 'Java', icon: 'java' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'jQuery', icon: 'jquery' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Mongoose', icon: 'mongoose' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Next.js', icon: 'next.js', isDark: true },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'PHP', icon: 'php' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Python', icon: 'python' },
  { name: 'React', icon: 'react' },
  { name: 'Ruby', icon: 'ruby' },
  { name: 'Ruby on Rails', icon: 'rails', specificIcon: 'rails-plain' },
  { name: 'shadcn', icon: 'shadcnui' },
  { name: 'Socket.IO', icon: 'Socket.io', isDark: true },
  { name: 'Spring Boot', icon: 'springboot' },
  { name: 'SQLite', icon: 'sqlite' },
  { name: 'Tailwind', icon: 'tailwindcss' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Vue', icon: 'vuejs' },
]

const getImageUrls = (tech: Tech, theme: string) => {
  const mainSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`
  const specificSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.specificIcon}.svg`
  const fallbackSrc = `https://cdn.simpleicons.org/${tech.icon}/000000${theme === 'light' ? '' : '/ffffff'}`

  return { mainSrc, specificSrc, fallbackSrc }
}

const TechCard = ({ techName }: { techName: string }) => {
  const { theme } = useTheme()
  const { techFilter, setTechFilter } = useFilter()
  const tech = technologies.find((t) => t.name === techName)
  if (!tech) return null

  const { mainSrc, specificSrc, fallbackSrc } = getImageUrls(tech, theme)
  const getImageSrc = () => {
    if (tech.isDark) return fallbackSrc
    if (tech.specificIcon) return specificSrc
    return mainSrc
  }

  // Sets or unsets the technology filter
  const handleClick = () => {
    setTechFilter(techFilter === tech.name ? null : tech.name)
  }

  return (
    <Card
      className={`h-10 flex items-center gap-2 rounded-lg px-4 shadow-sm cursor-pointer border border-gray-200
        ${techFilter === tech.name ? 'ring-1 dark:ring-gray-200' : ''}`}
      onClick={handleClick}
    >
      <Image
        aria-hidden
        src={getImageSrc()}
        width={16}
        height={16}
        alt={`${tech.name} icon`}
        onError={(e) => {
          if (e.currentTarget.src === mainSrc || e.currentTarget.src === fallbackSrc) {
            e.currentTarget.src = specificSrc
          } else if (e.currentTarget.src === specificSrc) {
            e.currentTarget.src = fallbackSrc
          } else {
            e.currentTarget.onerror = null
          }
        }}
      />
      <span className='text-sm md:text-md font-medium'>{tech.name}</span>
    </Card>
  )
}

export default TechCard