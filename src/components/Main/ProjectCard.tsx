import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { useFilter } from '@/context/FilterContext'
import TechCard from '../ui/TechCard'

export interface Project {
  id: number
  name: string
  description: string
  image: string
  tech: string[]
  status: Status['name']
  linkRepo: string
  linkDemoSite: string
  linkDemoVideo: string
}

const statusMapping = {
  'completed': 'text-green-500',
  'inprogress': 'text-yellow-500',
  'shelved (basic done)': 'text-orange-500',
  'shelved (barebones)': 'text-orange-500',
  'abandoned': 'text-red-500',
} as const
type StatusName = keyof typeof statusMapping

interface Status {
  name: StatusName
  color: string
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { theme } = useTheme()
  const { statusFilter, setStatusFilter } = useFilter()
  const colorClass = statusMapping[project.status]

  // Sets or unsets the status filter
  const handleStatusClick = (status: string) => {
    setStatusFilter(statusFilter === status ? null : status)
  }

  const getYouTubeThumbnail = (url: string) => {
    // Extract video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    const videoId = match?.[2]
    
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    }
    console.log('no match', url)
    return url // Return original URL if not a YouTube link
  }
  let imageUrl = ''
  if (project.image.toLowerCase().includes('placehold') && project.linkDemoVideo) {
    imageUrl = getYouTubeThumbnail(project.linkDemoVideo)
  } else {
    imageUrl = project.image
  }

  return (
    <Card key={project.id} className='flex flex-col'>
      <CardHeader>
        <CardTitle className='text-center text-2xl'>{project.name}</CardTitle>
      </CardHeader>
      <CardContent className='flex-grow pb-3'>
        <Dialog>
          <DialogTrigger asChild>
            <div className='relative w-full h-64 flex justify-center items-center bg-gray-100 dark:bg-gray-800 cursor-pointer'>
              <Image
                aria-hidden
                src={imageUrl}
                width={600}
                height={500}
                className='object-contain w-full h-full hover:scale-110 transition-transform'
                alt='Project image'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </DialogTrigger>
          <DialogContent className='hidden lg:flex flex-col w-[1200px] min-h-[400px] max-w-[95vw] max-h-[95vh] p-6'>
            <DialogHeader className='mb-4'>
              <DialogTitle className='text-2xl'>{project.name}</DialogTitle>
              <DialogDescription className='text-base'>
                {project.description}
              </DialogDescription>
            </DialogHeader>
            <div className='flex-1 relative flex items-center justify-center overflow-hidden'>
              <Image
                src={imageUrl}
                width={1920}
                height={1080}
                alt='Project image'
                className='object-contain w-full h-auto max-h-full'
                sizes='95vw'
                priority
              />
            </div>
          </DialogContent>
        </Dialog>
        <CardDescription className='my-3'>{project.description}</CardDescription>
        <div className='flex flex-wrap gap-2'>
          {project.tech.map((techName) => (
            <TechCard key={techName} techName={techName} />
          ))}
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <div className='flex flex-wrap gap-2'>
          {project.linkRepo && (
            <Button variant='link' className='p-1' asChild>
              <Link href={project.linkRepo} target='_blank'>
                <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true' version='1.1' data-view-component='true' className='scale-125 octicon octicon-repo UnderlineNav-octicon'>
                  <path
                    d='M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z'
                    fill={theme === 'light' ? 'black' : 'white'}
                  />
                </svg>
              </Link>
            </Button>
          )}
          {project.linkDemoSite && (
            <Button variant='link' className='p-1' asChild>
              <Link href={project.linkDemoSite} target='_blank'>
                <svg fill={theme === 'light' ? 'black' : 'white'} width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='#000000' strokeWidth='0.00024000000000000003' className='scale-[1.5]'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'> <path fillRule='evenodd' clipRule='evenodd' d='M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'></path> </g>
                </svg>
              </Link>
            </Button>
          )}
          {project.linkDemoVideo && (
            <Button variant='link' className='p-1' asChild>
              <Link href={project.linkDemoVideo} target='_blank'>
                <Image
                  src={`https://cdn.simpleicons.org/Youtube/000000${theme === 'light' ? '' : '/ffffff'}`}
                  width={16}
                  height={16}
                  alt='Youtube icon'
                  className='w-5 h-5'
                />
              </Link>
            </Button>
          )}
        </div>
        <Button
          variant='link'
          className={`p-1 text-sm ${colorClass} hover:opacity-80 transition-opacity`}
          onClick={() => handleStatusClick(project.status)}
        >
          #{project.status}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard