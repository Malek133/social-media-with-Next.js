import React, { ReactNode } from 'react'
import Navbar from './_components/Navbar'



const LandingPage = ({children}:
    {children:ReactNode}) => {
  return (
    <div>
        <Navbar />
            <main>
                {children}
            </main>
            {/* footer */}
        </div>
  )
}

export default LandingPage