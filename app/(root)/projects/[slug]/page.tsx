'use client';

import { useParams } from 'next/navigation'
import React from 'react'


const SingleProject = () => {

    const {slug} = useParams();
  return (
    <div>{slug}</div>
  )
}

export default SingleProject