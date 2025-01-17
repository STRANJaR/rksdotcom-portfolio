import Image from 'next/image'
import React from 'react'

const Storyline = () => {
  return (
    <main className='h-full w-full flex flex-row justify-center'>
        <section className='h-full w-[50%] flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Storyline</h1>

            <div className='w-full flex flex-col p-5 justify-center items-center text-sm  border-l-4 border-green-1 rounded-sm'>
                <div className='h-auto w-full'>
                    <Image
                    src={'/profile_me.jpg'}
                    alt='logo'
                    width={80}
                    height={80}
                    />
                </div>
                <div>
                    <span>title of the post</span>
                </div>
            </div>
        </section>
        
    </main>
  )
}

export default Storyline