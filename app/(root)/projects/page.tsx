import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import {projects} from '@/constants/constant'



const page = () => {
    return (
        <main className='h-full w-full flex flex-row justify-center'>
            <section className='h-full w-[50%] flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'>Projects</h1>


                <div className='flex flex-col gap-10'>
                    {projects && projects.map(project => (

                        <ProjectCard
                            key={project.id}
                            projectId={project.id}
                            title={project.title}
                            projectImg={project.image}
                            description={project.description}
                            techStack={project.techStack}
                            status={project.status}
                            slug={project.slug}
                        />
                    ))}
                </div>

            </section>
        </main>
    )
}

export default page