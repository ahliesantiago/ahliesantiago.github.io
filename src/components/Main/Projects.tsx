import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import TechCard from '../ui/TechCard'
import Image from 'next/image'

interface Project {
  id: number
  name: string
  description: string
  image: string
  tech: string[]
  status: Status['name']
  linkRepo: string
  linkDemo: string
}

const statusMapping = {
  'completed': 'text-green-500',
  'inprogress': 'text-yellow-500',
  'shelved (basic complete)': 'text-orange-500',
  'abandoned': 'text-red-500',
} as const
type StatusName = keyof typeof statusMapping

interface Status {
  name: StatusName
  color: string
}

const Projects = () => {
  const sampleData: Project[] = [
    {
      id: 1,
      name: 'POS-Lite v2',
      description: 'A lite point of sale system with inventory tracking, designed for small businesses, built with the VILT stack.',
      image: 'https://placehold.co/600x400?text=Project+Image',
      tech: ['PHP', 'Laravel', 'vue', 'PostGreSQL'],
      status: 'inprogress',
      linkRepo: 'https://github.com/ahliesantiago/pos-lite',
      linkDemo: '',
    },
    {
      id: 2,
      name: 'StoryMD',
      description: 'A repository for your stories, its actual content, and wiki-like pages for your story elements, characters, settings, etc.. ',
      image: 'https://placehold.co/600x400?text=Project+Image',
      tech: ['PHP', 'Laravel', 'MySQL'],
      status: 'shelved (basic complete)',
      linkRepo: 'https://github.com/ahliesantiago/storymd-vilt',
      linkDemo: '',
    },
    {
      id: 3,
      name: 'POS-Lite v1',
      description: 'A lite point of sale system with inventory tracking, designed for small businesses, built with CodeIgniter.',
      image: 'https://placehold.co/600x400?text=Project+Image',
      tech: ['PHP', 'CodeIgniter', 'MySQL'],
      status: 'shelved (basic complete)',
      linkRepo: 'https://github.com/ahliesantiago/pos-and-inventory-tracker',
      linkDemo: '',
    },
    {
      id: 4,
      name: 'Multiplayer Minigame',
      description: 'My multiplayer game project for my bootcamp.',
      image: 'https://placehold.co/600x400?text=Project+Image',
      tech: ['JavaScript', 'Node.js', 'Socket.IO'],
      status: 'shelved (basic complete)',
      linkRepo: 'https://github.com/ahliesantiago/multiplayer-game1',
      linkDemo: '',
    },
    {
      id: 5,
      name: 'Social Media Clone',
      description: 'A social media clone web app.',
      image: 'https://placehold.co/600x400?text=Project+Image',
      tech: ['Ruby on Rails'],
      status: 'shelved (basic complete)',
      linkRepo: 'https://github.com/ahliesantiago/socmed-ror',
      linkDemo: '',
    },
  ]

  return sampleData.map((project) => {
    const colorClass = statusMapping[project.status]
    return (
      <Card key={project.id} className='col-span-2 lg:col-span-1 flex flex-col'>
        <CardHeader>
          <CardTitle className='text-center text-2xl'>{project.name}</CardTitle>
        </CardHeader>
        <CardContent className='flex-grow'>
          <div className='relative w-full h-64 flex justify-center items-center'>
            <Image
              aria-hidden
              src={project.image}
              layout='fill'
              objectFit='cover'
              alt='Project image'
            />
          </div>
          <CardDescription className='my-3'>{project.description}</CardDescription>
          <div className='flex flex-wrap gap-2'>
            {project.tech.map((techName) => (
              <TechCard key={techName} techName={techName} />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <p className={`text-sm ${colorClass}`}>#{project.status}</p>
        </CardFooter>
      </Card>
    )
  })
}

export default Projects