import React from 'react'
import { Input } from './ui/input'
import { Mail } from 'lucide-react'

const ReachOut = () => {
  return (
    <main className='h-full w-full   flex flex-row justify-center py-5'>
        <div className='h-full w-[50%] flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Have any suggestions? Hit the mail!</h1>

            <div>
                {/* <div className='relative top-8 left-2'>
                    <Mail className='h-6 w-6'/>
                </div> */}
                <Input className='py-4' type='email' placeholder='Enter your email'/>
                
            </div>
        </div>

    </main>
  )
}

export default ReachOut