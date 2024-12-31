import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'

const SiteFooter = () => {
  return (
    <footer>
      <div className='container py-10 md:py-0 md:h-20'>
        <p className='text-center text-sm '>
          Built by {""}
          <Link href={siteConfig.links.x} className='underline underline-offset-4 font-medium' target='_blank' rel='noreferrer'>yh1110</Link>
          . Hosted on {""}
          <Link href={"https://vercel.com"} className='underline underline-offset-4 font-medium' target='_blank' rel='noreferrer'>Vercel</Link>
        </p>
        
      </div>
    </footer>
  )
}

export default SiteFooter