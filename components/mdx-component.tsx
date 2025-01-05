'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'
import React from 'react'
import Callout from './callout'

const components = {
  Image,
  Callout
}

const Mdx = ({code}: {code: string}) => {

  const Component = useMDXComponent(code)

  return (
    <div className=' prose lg:prose-lg max-w-full'>
      <Component components={components} />
    </div>
  )
}

export default Mdx