'use client'

import { ModeToggle } from '@/components/ModeToggel'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { Menu,Diff } from 'lucide-react';

import {
  Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const NavLinks = [
  { label: "Home", href: "/" },
  { label: "Share your story", href: "/story" },
  { label: "Browse stories", href: "/stories" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="py-5 fixed z-50 
    w-full bg-background">

      <div className="flex max-w-7xl mx-auto 
      px-5 items-center justify-between">
         {/* <Image
           src=""
          alt="logo"
          width={130}
          height={130}
          className="dark:hidden"
        />
        <Image
         src={Nextjs}
          alt="logo"
          width={130}
          height={130}
          className="dark:block hidden"
        /> */}
         <h1 className='text-3xl font-semibold'>
         NEXT <span className='text-xs font-medium'>
          Al0.</span>
         </h1>
         <div className="md:flex hidden items-center gap-x-10">
          {NavLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm text-muted-foreground hover:text-primary transition-colors",
                pathname === href && "text-primary font-semibold"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        
        <div className='flex justify-between items-center'>
          
            <Sheet>
      <SheetTrigger className='md:hidden block mx-3' asChild>
        <Button ><Menu /></Button>
      </SheetTrigger>
      <SheetContent>
         <SheetHeader>
          <div className="flex flex-col item-start gap-y-3 my-10">
          {NavLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm text-muted-foreground hover:text-primary transition-colors",
                pathname === href && "text-primary font-semibold"
              )}
            >
              {label}
            </Link>
          ))}
          
          <UserButton />
        </div>
        </SheetHeader>
        <SignedOut>
                <SignInButton mode="modal">
                  <Button>Log In</Button>
                </SignInButton>
              </SignedOut>
         
      </SheetContent>
    </Sheet>
         
        <SignedOut>
          <div className='md:block hidden'>
            <SignInButton>
              <Button className='mx-4'>Log In</Button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <Link href={'/story'}>
            <Button className='mx-4'>
            <Diff />
              <span className='md:block hidden'>
                
                Create a story</span>
            </Button>
          </Link>
        </SignedIn>

       <span className='md:block hidden'>
        <UserButton />
        </span> 
        <span className='mx-3'>
          <ModeToggle />
        </span>
        



        </div>
       
      </div>

      </nav>
  )
}

export default Navbar
