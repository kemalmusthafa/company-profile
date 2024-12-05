import React, { ReactNode } from 'react'

export default function Wrapper({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-wrap w-auto h-auto justify-center">
        {children}
    </div>
  )
}
