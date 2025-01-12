import React from 'react'

const About = () => {
  const totalWorkExp = '6+'
  const yearsAsDev = '8 months'
  const currentLevel = 'Junior'
  const currentRole = 'Web Developer'

  return (
    <div className='text-xl'>
      Hi! I&apos;m Ahliesa Santiago.

      I am a {currentLevel} {currentRole}, with aspirations of working in Game Development.
      I am a career shifter with a total of {totalWorkExp} years professional experience,
      and I have been a software developer for {yearsAsDev}{' '}
      (though it feels much longer as I have been dabbling in this field for years).
    </div>
  )
}

export default About