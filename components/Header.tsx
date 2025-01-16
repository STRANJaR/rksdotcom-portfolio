'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = () => {

    const { setTheme, theme } = useTheme()




    return (
        <main className='h-full w-full flex flex-row justify-center'>
            <section className='h-full p-4 w-[55%] flex flex-row justify-between items-center  transition-all'>
                <div className='flex flex-row items-center gap-4'>
                    <Image
                        src={'/profile_me.jpg'}
                        alt='logo'
                        width={80}
                        height={80}
                        className='rounded-full grayscale hover:grayscale-0'
            />

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold'>Rohit Shrivastav</h1>
                        <div className='flex flex-row items-center gap-2'>
                            <Link href={'/'} className='text-sm text-purple-1  dark:text-green-2  hover:underline'>About</Link>
                            &bull;
                            <Link href={'/projects'} className='text-sm text-purple-1 dark:text-green-2  hover:underline'>Projects</Link>
                            &bull;
                            <Link href={'/storyline'} className='text-sm text-purple-1 dark:text-green-2  hover:underline'>Storyline</Link>
                        </div>

                    </div>
                </div>

                <div className='flex flex-row items-center gap-4'>
                    <Search className='h-6 w-6 cursor-pointer hover:text-green-1' />
                    <Sun
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='h-6 w-6 cursor-pointer hover:text-green-1' />
                </div>
            </section>
        </main>
    )
}

export default Header