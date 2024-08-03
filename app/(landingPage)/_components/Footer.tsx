import React from "react";

import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="max-w-7xl p-5 z-50 mx-auto flex items-center flex-wrap md:justify-between justify-center md:space-y-0 space-y-3">
     <h1 className='text-xl font-semibold'>
         NEXT <span className='text-xs font-medium'>
          Al0.</span>
         </h1>
      <div className="flex items-center flex-wrap gap-2">
        <Button variant={"link"}>
            Privacy Policy
        </Button>
        <Button variant={"link"}>
            Terms of Service
        </Button>
      </div>
    </footer>
  );
};

export default Footer;