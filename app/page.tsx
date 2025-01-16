import Experience from '@/components/Experience'
import Greeting from '@/components/Greeting'
import Projects from '@/components/Projects'
import ReachOut from '@/components/ReachOut'
import TechStack from '@/components/TechStack'
import React from 'react'

const Home = () => {
  return (
    <main className=' flex flex-col gap-6 py-5'>
      {/* <Header /> */}
      <Greeting />
      <TechStack />
      <Experience />
      <Projects />
      <ReachOut />
      {/* <Footer /> */}
    </main>
  )
}

export default Home