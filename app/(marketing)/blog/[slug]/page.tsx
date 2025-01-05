import { allPosts } from '@/.contentlayer/generated'
import Mdx from '@/components/mdx-component'
import { buttonVariants } from '@/components/ui/button'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug)
  return post
}

const PostPage = async ({params}: {params: {slug: string}}) => {
  const slug = params.slug
  const post = await getPostFromSlug(slug)

  if (!post) {
    notFound()
  }


  return (
    <article className='container max-w-3xl py-6 lg:py-10 w-[80%] mx-auto'>
      <div>
        {post.date && <time>Published on {format(post.date, 'yyyy-MM-dd')}</time>}
        <h1 className=' text-4xl font-extrabold mt-2 lg:text-5xl tracking-tight'>
          {post.title}
        </h1>
      </div>
      {post.image && <Image src={post.image} alt={post.title} width={800} height={405} className=' rounded-lg my-8 border' />}
      <Mdx code={post.body.code} />
      <hr className='mt-12' />
      <div className=' py-6 text-center lg:py-10'>
        <Link href='/blog' className={`${buttonVariants({variant: 'secondary'})}`}>
          すべての記事に戻る
        </Link>
      </div>
    </article>
  )
}

export default PostPage