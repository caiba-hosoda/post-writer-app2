import { siteConfig } from '@/config/site'
import { Metadata } from 'next'
import React from 'react'
import { getPostFromSlug } from './page'

// 動的なメタデータを生成
export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
  const page = await getPostFromSlug(params.slug)

  if (!page) {
    return {}
  }

  return {
    title: page?.title,
    description: page?.description,
    openGraph:{
      type:"website",
      locale:"ja",
      url:siteConfig.url,
      title:siteConfig.name,
      description:siteConfig.description,
      siteName:siteConfig.name
    },
    twitter:{
      card:"summary_large_image",
      title:siteConfig.name,
      description:siteConfig.description,
      images:[`${siteConfig.url}/og.jpg`],
      creator:"@yh1110"
    },
  }
}

const SlugLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  )
}

export default SlugLayout