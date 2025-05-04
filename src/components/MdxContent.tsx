// app/components/MdxContent.tsx
'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

type Props = {
    source: MDXRemoteSerializeResult
}

export function MdxContent({ source }: Props) {
    return <MDXRemote {...source} />
}
