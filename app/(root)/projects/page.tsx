import ProjectCard from '@/components/ProjectCard'
import React from 'react'



const projects = [
    {
        id: 1,
        title: 'Hudle - A Venue and Events Booking Platform',
        image: '/banner1.jpg',
        description: 'this is desc...',
        status: 'C',
        slug: 'hudle',
        techStack: ['NestJS', 'Azure', 'Keycloak', 'Postgres', 'Redis', 'Terraform'],
    },
    {
        id: 2,
        title: 'MonkeyType - A Venue and Events Booking Platform',
        image: '/banner2.jpg',
        description: 'this is desc...',
        status: 'C',
        slug: 'monkey-type',
        techStack: ['NestJS', 'Azure', 'Keycloak', 'Postgres', 'Redis', 'Terraform'],
    },
]
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