import React, { useState } from 'react'

function Navbar() {

const[open, setOpen] = useState(false)

  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>

        {/* LOGO */}

        <div className='flex items-center gap-4 '>
            <img src="/logo.png" className='w-8 h-8' alt="" />
            <span>lama logo</span>
        </div>


        {/* Mobile MENU */}

        <div className='md:hidden'>


            {/* MOBILE BUTTON */}

            <div className='cursor-pointer text-4xl' onClick={()=>setOpen((prev)=> !prev)}>
                {open ? "X" : "="}
            </div>

            {/* MOBILE LINK LIST */}


            <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-red-700 transition-all ease-in-out ${open ? '-right-0' :'-right-[100%'}`}> 
                menu
            </div>
        </div>

        {/* DESKTOP MENU */}

        <div className='hidden md:flex'>D</div>

    </div>
  )
}

export default Navbar