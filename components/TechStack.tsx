import React from 'react'
import {
    UIFrameworks,
    Databases,
    Frameworks,
    Platforms,
    ProgrammingLanguages,

} from '@/constants/constant'

const TechStack = () => {
    return (
        <main className='h-full w-full flex flex-row justify-center py-5'>
            <section className='h-full w-[50%] flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'>Technologies I have worked with</h1>

                <p className='text-sm'>The below mentioned list is a subset of all type of stack I have worked with, you can checkout my projects to know more.</p>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>Programming Languages</span>
                    <span>:</span>
                    {ProgrammingLanguages && ProgrammingLanguages.map(lang => (
                    <span key={lang}>
                        {lang},
                    </span>
                    ))}
                </div>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>Frameworks</span>
                    <span>:</span>
                    {Frameworks && Frameworks.map(framweork => (
                    <span key={framweork}>
                    {framweork},
                    </span>
                    ))}
                </div>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>UI Frameworks</span>
                    <span>:</span>
                    {UIFrameworks && UIFrameworks.map(framework => (

                    <span key={framework}>
                        {framework},
                    </span>
                    ))}
                </div>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>Database</span>
                    <span>:</span>
                    {Databases && Databases.map(db => (

                    <span key={db}>
                        {db}
                    </span>
                    ))}
                </div>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>Platform/Cloud</span>
                    <span>:</span>
                    {Platforms && Platforms.map(platform => (

                    <span key={platform}>
                        {platform},
                    </span>
                    ))}
                </div>

            </section>

        </main>
    )
}

export default TechStack