import Experience from '@/components/Experience'
import Greeting from '@/components/Greeting'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import ReachOut from '@/components/ReachOut'
import TechStack from '@/components/TechStack'
import React from 'react'

const Home = () => {
  return (
    <main className='bg-dark-1 flex flex-col gap-6 py-10'>
      <Header/>
      <Greeting/>
      <TechStack/>
      <Experience/>
      <Projects/>
      <ReachOut/>
    </main>
  )
}

export default Home