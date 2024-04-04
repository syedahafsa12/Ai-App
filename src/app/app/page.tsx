import React from 'react'
import {Navbar} from '@/components/navbar'
// import { Sidebar } from 'lucide-react'
import { Sidebar } from '@/components/sidebar'
import Newest from '@/components/Images'



function app() {
    return (
      <main className='h-full'>
        <Navbar isPro={false}/>
        <div className='hidden md:flex mt-16 fixed inset-y-0 flex-col'>
            <Sidebar isPro={false}/>
        </div>
        <main className='md:pl-20 pt-16 h-full'></main>
        <Newest/>

        
      </main>
    )
  }

export default app 