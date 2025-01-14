'use client';

import { projects } from '@/constants/constant';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ProjectDetails } from '@/components/ProjectCard';


const SingleProject = () => {

    const {id} = useParams();

    const [project, setProject ] = useState<ProjectDetails[]>()

    useEffect(() => {
        // TODO:

        const newData = projects.filter(project => project.slug !== id)
        setProject(newData)
    }, [id])

  return (
    <main className='h-full w-full flex flex-row justify-center'>
        <section className='h-full w-[50%] flex flex-col gap-4'>
            <h1>

            </h1>
        </section>
    </main>
  )
}

export default SingleProject