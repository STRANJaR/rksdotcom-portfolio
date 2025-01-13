import React from 'react'
import { Input } from './ui/input'
import { Mail } from 'lucide-react'
import { Button } from './ui/button'

const ReachOut = () => {
  return (
    <main className='h-full w-full   flex flex-row justify-center py-5'>
        <div className='h-full w-[50%] flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Have any suggestions? Hit the mail!</h1>


            <p className='text-sm'>Send me an email at rohitrks805@gmail.com, whatsapp me or just drop your email address below and I will get back to you!</p>
            <div className='flex flex-col gap-3'>
                <Input className='py-4 bg-dark-2' type='email' placeholder='Enter your email'/>
                <Button 
                className='w-full h-12 font-bold bg-green-1'
                >
                    Send
                </Button>
                
            </div>
        </div>

    </main>
  )
}

export default ReachOut