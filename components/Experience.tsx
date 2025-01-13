import React from 'react'

const Experience = () => {
    return (
        <main className='h-full w-full flex flex-row justify-center py-5'>
            <section className='h-full w-[50%] flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'>Experience</h1>

                <div className='flex flex-row items-center gap-4 text-sm'>
                    <span>
                        01/2024 - 09/2024
                    </span>
                    <span className='font-bold'>
                        Enterprise Engineering
                    </span>
                    <span>
                        @
                        Codecademy (Skillsoft)
                    </span>
                </div>
            </section>
        </main>
    )
}

export default Experience