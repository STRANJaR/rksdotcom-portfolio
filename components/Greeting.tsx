

import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Greeting = () => {
  return (
    <main className='h-full w-full   flex flex-row justify-center py-5'>
        <section className='h-full w-[50%] flex flex-col gap-4 '>
            <h1 className='text-2xl font-bold'>Hey there!</h1>

            <p className='text-sm'>
            Building IntentJS - a laravel like framework for NodeJS. I am also building my development studio HanaLabs for building scalable and custom tailerd solution. 6+ YOE in building Enterprise Applications, SaaS products, Web and Mobile Apps. I have authored several Open Source Projects. Follow me on X.com for regular updates.
            </p>

            <div className='flex flex-row items-center gap-2 text-sm'>
                <span>Find me on </span>
                <Link href={'https://github.com/STRANJaR'} target='_blank' className=' bg-sky-1 dark:bg-dark-2 p-2 rounded-full'> <Github className='h-4 w-4'/> </Link>
                <Link href={'https://www.linkedin.com/in/rohit-shrivastav-dev/'} target='_blank' className=' bg-sky-1 dark:bg-dark-2 p-2 rounded-full'> <Linkedin className='h-4 w-4'/> </Link>
                <Link href={'https://x.com/rks_dot_com'} target='_blank' className=' bg-sky-1 dark:bg-dark-2 p-2 rounded-full'> <Twitter className='h-4 w-4'/> </Link>
            </div>
        </section>
    </main>
  )
}

export default Greeting