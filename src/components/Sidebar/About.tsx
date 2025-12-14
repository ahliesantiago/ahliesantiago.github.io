import { useTheme } from '@/context/ThemeContext'

const About = () => {
  const { theme } = useTheme()

  const calculateYears = (date: Date) => {
    const now = new Date()
    const years = now.getFullYear() - date.getFullYear()
    const months = now.getMonth() - date.getMonth()
    return Math.ceil(years + months / 12)
  }

  const startDateWorking = new Date('2018-07-01')
  const startDateInTech = new Date('2019-12-19')
  const startDateAsDev = new Date('2024-06-10')

  const totalWorkExp = calculateYears(startDateWorking)

  const yearsAsDev = calculateYears(startDateAsDev)
  const yearsInTech = calculateYears(startDateInTech)
  const currentRole = 'Full-Stack Web Developer'

  return (
    <div className={`text-lg md:text-md p-6 rounded-md ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-800'}`}>
      Hi! I&apos;m Ahliesa Santiago.
      I am a {currentRole} with aspirations of working in Game Development, both as a Developer and Artist.
      I have around {totalWorkExp} years of professional experience:{' '}
      {yearsInTech - yearsAsDev} in technical support and operations,
      and {yearsAsDev} as a software developer (though it feels much longer,
      and right at home, as I have been dabbling in coding for years).
    </div>
  )
}

export default About