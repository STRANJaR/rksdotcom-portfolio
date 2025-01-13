import React from 'react'

const TechStack = () => {
    return (
        <main className='h-full w-full flex flex-row justify-center py-5'>
            <section className='h-full w-[50%] flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'>Technologies I have worked with</h1>

                <p className='text-sm'>The below mentioned list is a subset of all type of stack I have worked with, you can checkout my projects to know more.</p>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>Programming Languages</span>
                    <span>:</span>
                    <span>Typescript, Python, PHP, Ruby, Rust</span>
                </div>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>Frameworks</span>
                    <span>:</span>
                    <span>React, NextJS, Laravel, Ruby on Rails</span>
                </div>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>UI Frameworks</span>
                    <span>:</span>
                    <span>React, VueJS, Astro, NextJS, Tailwind</span>
                </div>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>Database</span>
                    <span>:</span>
                    <span>Postgres, MySQL, MongoDB, Redis, DragonflyDB</span>
                </div>

                <div className='flex flex-row items-center gap-2 text-sm'>
                    <span className='underline'>Platform/Cloud</span>
                    <span>:</span>
                    <span>Azure, AWS, Kubernetes, Kafka, Terraform, Jenkins, Grafana, Prometheus, Docker</span>
                </div>

            </section>

        </main>
    )
}

export default TechStack