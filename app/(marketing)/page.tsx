import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='pt-6 md:pt-10 lg:py-32 md:pb-12 sm:pb-6 pb-4 flex flex-col items-center'>
      <div className='container text-center items-center gap-4 max-w-[64rem] flex flex-col'>
        <Link href={siteConfig.links.x} className='bg-muted px-4 py-1.5 font-medium text-sm'>Xをフォローする</Link>
        <h1 className='font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Post Writer
        </h1>
        <p className='text-muted-foreground sm:text-xl leading-normal max-w-80 sm:max-w-[42rem]'>
          このアプリケーションはNext.js AppRouterで作成されたものです。ユーザーは自由に投稿をポストすることができます。
        </p>
        <div className=' space-x-4'>
          <Link href={'/login'} className={`${buttonVariants({size:"lg"})}`}>
            はじめる
          </Link>
          <Link href={siteConfig.links.github} className={`${buttonVariants({size:"lg", variant:'outline'})}`} target='_blank' rel='noreferrer'>
            Github
          </Link>
        </div>
      </div>
    </section>

    <section id='features' className='container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6'>
      <div className='text-center space-y-6  mx-auto'>
        <h2 className=' font-extrabold text-3xl md:text-6xl'>サービスの特徴</h2>
        <p className=' text-muted-foreground sm:text-lg sm:leading-7 mx-auto w-[80%] '>このプロジェクトはモダンな技術スタックを使って作られたアプリケーションです。Next.jsやcontentlayerを使用してマークダウン形式でブログ投稿ができます。</p>
      </div>

      <div className=' mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[80%]'>
        <div className=' bg-background border p-2 rounded'>
          <div className=' p-6 h-[180px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 128 128" className='h-1/3'><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg>
            <div className=' h-2/3 flex flex-col justify-center'>
              <div className='space-y-2'>
                <h3 className=' font-bold'>Next.js</h3>
                <p className=' text-sm text-muted-foreground break-words'>AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-background border p-2 rounded'>
          <div className=' p-6 h-[180px]'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512" className='h-1/3'><path fill="currentColor" d="M487.83 319.44L295.63 36.88a48 48 0 0 0-79.26 0L24.17 319.44a47.1 47.1 0 0 0 16.93 68.13l192.2 102.75a48.05 48.05 0 0 0 45.4 0l192.2-102.75a47.1 47.1 0 0 0 16.93-68.13Zm-431.26 41a16.12 16.12 0 0 1-8-10.38a16.8 16.8 0 0 1 2.37-13.62L232.66 69.26c2.18-3.21 7.34-1.72 7.34 2.13v374c0 5.9-6.54 9.63-11.87 6.78Z"/></svg>
            <div className=' h-2/3 flex flex-col justify-center'>
              <div className='space-y-2'>
                <h3 className=' font-bold'>Prisma</h3>
                <p className=' text-sm text-muted-foreground break-words'>AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-background border p-2 rounded'>
          <div className=' p-6 h-[180px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" className='h-1/3'><path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
            <div className=' h-2/3 flex flex-col justify-center'>
              <div className='space-y-2'>
                <h3 className=' font-bold'>tailwind css</h3>
                <p className=' text-sm text-muted-foreground break-words'>AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-background border p-2 rounded'>
          <div className=' p-6 h-[180px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" className='h-1/3'><path fill="currentColor" d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"/></svg>
            <div className=' h-2/3 flex flex-col justify-center'>
              <div className='space-y-2'>
                <h3 className=' font-bold'>shadcn/ui</h3>
                <p className=' text-sm text-muted-foreground break-words'>AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-background border p-2 rounded'>
          <div className=' p-6 h-[180px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" className='h-1/3'><path fill="currentColor" d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/></svg>
            <div className=' h-2/3 flex flex-col justify-center'>
              <div className='space-y-2'>
                <h3 className=' font-bold'>supabase</h3>
                <p className=' text-sm text-muted-foreground break-words'>AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-background border p-2 rounded'>
          <div className=' p-6 h-[180px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 285" className='h-1/3'><path d="M220.412 0h-92.415l28.562 89.006h92.416l-74.77 53.077l28.57 89.511c48.128-35.06 63.854-88.12 46.208-142.588L220.413 0ZM7.018 89.006h92.416L127.997 0H35.589L7.019 89.006c-17.655 54.468-1.92 107.529 46.207 142.588l28.563-89.51l-74.77-53.078Zm46.208 142.588l74.77 52.97l74.77-52.97l-74.77-53.847l-74.77 53.847Z"/></svg>
            <div className=' h-2/3 flex flex-col justify-center'>
              <div className='space-y-2'>
                <h3 className=' font-bold'>oAuth</h3>
                <p className=' text-sm text-muted-foreground break-words'>AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-background border p-2 rounded'>
          <div className=' p-6 h-[180px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 128 128" className='h-1/3'><path d="M63.984 17.184L127.964 128H0Zm0 0"/></svg>
            <div className=' h-2/3 flex flex-col justify-center'>
              <div className='space-y-2'>
                <h3 className=' font-bold'>Vercel</h3>
                <p className=' text-sm text-muted-foreground break-words'>AppRouter/Layouts/APIRoutesの技術を使用</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' mx-auto md:max-w-[58rem] text-center w-[80%]' >
        <p className='text-muted-foreground sm:text-lg sm:leading-7'>
          Post Writerはログインするとブログ投稿ができるようになります。
        </p>
      </div>
    </section>

    <section id='contact' className='container py-8 md:py-12 lg:py-24'>
      <div className='max-w-[58rem] mx-auto text-center flex flex-col gap-4 w-[90%]'>
        <h2 className=' font-extrabold text-3xl md:text-6xl'>ContanctMe</h2>
        <p className=' text-muted-foreground sm:text-lg sm:leading-7'>
          もしwebサービスが気に入った場合は
          <br />
          下記XからDMにてご連絡ください
          <br />
          お仕事のご連絡をお待ちしております。
        </p>
        <Link href={siteConfig.links.x} className='underline underline-offset-4' target='_blank' rel='noreferrer'>
          お仕事はXまで
        </Link>
      </div>

    </section>
    </>
  )
}

export default page