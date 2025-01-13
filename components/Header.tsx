
import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { LucideSunMoon, Search } from 'lucide-react'

const Header = () => {
  return (
    <main className='h-full w-full flex flex-row justify-center'>
        <section className='h-full p-4 w-[60%] flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center gap-4'>   
                <Image 
                src={'/profile_me.jpg'}
                alt='logo'
                width={80}
                height={80}
                />

                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-bold'>Rohit Shrivastav</h1>
                    <div className='flex flex-row items-center gap-2'>
                        <Link href={'#'} className='text-sm text-green-2 hover:underline'>About</Link>
                        &bull;
                        <Link href={'#'} className='text-sm text-green-2 hover:underline'>Projects</Link>
                        &bull;
                        <Link href={'#'} className='text-sm text-green-2 hover:underline'>Storyline</Link>
                    </div>

                </div>
            </div>

            <div className='flex flex-row items-center gap-4'>
                <Search className='h-6 w-6 cursor-pointer hover:text-purple-1'/>
                <LucideSunMoon className='h-6 w-6 cursor-pointer hover:text-purple-1'/>
            </div>
        </section>
    </main>
  )
}

export default Header