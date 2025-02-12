import { useTheme } from '@/context/ThemeContext'

const About = () => {
  const { theme } = useTheme()

  const totalWorkExp = '6+'
  const yearsAsDev = '8 months'
  const currentLevel = 'Junior'
  const currentRole = 'Web Developer'

  return (
    <div className={`text-lg md:text-md p-6 rounded-md ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-800'}`}>
      Hi! I&apos;m Ahliesa Santiago.

      I am a {currentLevel} {currentRole}, with aspirations of working in Game Development.
      I am a career shifter with a total of {totalWorkExp} years professional experience,
      and I have been a software developer for {yearsAsDev} (though it feels much longer,
      and right at home, as I have been dabbling in coding for years).
    </div>
  )
}

export default About