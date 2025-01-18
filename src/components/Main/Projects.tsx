import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useFilter } from '@/context/FilterContext'
import ProjectCard, { Project } from './ProjectCard'

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const { techFilter, statusFilter, setTechFilter, setStatusFilter } = useFilter()

  useEffect(() => {
    fetch('data/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  const filteredProjects = projects.filter(project => {
    const matchesTech = !techFilter || project.tech.includes(techFilter)
    const matchesStatus = !statusFilter || project.status === statusFilter
    return matchesTech && matchesStatus
  })

  const clearFilters = () => {
    setTechFilter(null)
    setStatusFilter(null)
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
      {(techFilter || statusFilter) && (
        <div className='lg:col-span-2 flex justify-center sm:justify-start'>
          <Button 
            variant='outline' 
            onClick={clearFilters}
            className='text-sm border border-gray-300 dark:border-gray-500'
          >
            Clear Filters
          </Button>
        </div>
      )}
      {filteredProjects.map((project) => {
        return <ProjectCard key={project.id} project={project} />
      })}
    </div>
  )
}

export default Projects