import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

const Footer = () => {
    return (
        <main className='h-full w-full   flex flex-row justify-center py-5'>
            <section className='h-full w-[50%] flex flex-col gap-4 '>
                <div className='flex flex-row items-center justify-between '>
                    <div>
                        <h4 className='font-bold text-xs'> &copy; Rohit Shrivastav 2025</h4>
                    </div>

                    <div className='flex flex-row items-center h-3 gap-2'>
                        <Link href={'#'} className='text-xs font-bold text-green-2 hover:underline'>About</Link>
                        <Separator orientation='vertical' />
                        <Link href={'#'} className='text-xs font-bold text-green-2 hover:underline'>Projects</Link>
                        <Separator orientation='vertical' />
                        <Link href={'#'} className='text-xs font-bold text-green-2 hover:underline'>Storyline</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Footer