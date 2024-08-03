import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import homej from '../../../public/homej.jpg'

const hero = () => {
  return (
    <section className='flex flex-col items-center justify-center py-32 
    text-center space-y-3 min-h-full px-5'>
          <h2 className='text-xl font-semibold'>
            Welcome to AlO
        </h2>

        <h1 className='text-3xl md:text-5xl font-bold max-w-2xl'>
            Discover and Share Inspiring Career Journeys
        </h1>
        <p className='max-w-lg text-muted-foreground'>
            StoryCareer is a unique platform where individuels from all walks of life can share their career stories, challenges, and successes. Whether you&apos;re just starting out. 
        </p>
        <Link href="/stories">
            <Button variant={'outline'}>
                Discover people stories
            </Button>
        </Link>
        <Image
        src={homej}
        alt="logo"
        width={130}
        height={130}
        
      />
        </section>
  )
}

export default hero