import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'


export interface ProjectDetails {
    projectId: number,
    title: string,
    description: string,
    projectImg: string,
    techStack: string[],
    status: string,
    slug: string,
}

const ProjectCard = ({ projectId, title, description, projectImg, techStack, status, slug }: ProjectDetails) => {
    return (
        <main>
            <div className='h-full w-full flex flex-col gap-6 px-20 py-10'>
                <div className='h-80 w-full border border-dashed border-gray-600'>
                    <Image
                        src={projectImg}
                        alt={title}
                        width={3840}
                        height={2160}
                        className='h-full w-full'
                    />
                </div>

                <div className='flex flex-row items-center justify-between text-sm'>

                    <div className='flex flex-row items-center gap-1'>
                        <h1 className='font-bold'> {title || ''}</h1>
                        <span className='text-sm text-blue-1 font-bold'>
                            [{status}]
                        </span>
                    </div>

                    <span className='flex flex-row items-center gap-2 h-3'>
                        <Link href={'#'} className='hover:text-blue-1 transition-all'>Live</Link>
                        <Separator orientation='vertical' />
                        <Link href={'#'} className='hover:text-blue-1 transition-all'>Source</Link>
                    </span>

                    {/* <span>{techStack}</span> */}
                </div>

                <Link href={`/projects/${slug}`} className='w-full bg-green-1 text-center py-2 rounded-sm hover:bg-sky-2 hover:text-dark-1 transition-all'>
                    read more
                </Link>
            </div>
        </main>
    )
}

export default ProjectCard