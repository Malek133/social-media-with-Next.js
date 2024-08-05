"use client"

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
import { ModeToggle } from "@/components/ModeToggel";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
    const {user}=useUser();
    if(!user) return null
  return (
    <header className='flex py-5 items-center justify-between w-full'>
          <h1 className='text-xl font-medium md:block hidden'>
          Welcome back 👋 :  {user?.fullName}
            </h1>  
            
            <div className='flex items-center gap-x-3'>
            <MobileSidebar />
            <Link href="/">
            <Button variant={"ghost"}>
                    <ArrowLeft className='text-muted-foreground h-5 w-5 mr-2' />
                    <span className='md:block hidden'>
                        Back to Home
                    </span>
                </Button>
            </Link>
            <ModeToggle />
            <UserButton />
            </div>
            
    </header>

  )
}

export default Header
