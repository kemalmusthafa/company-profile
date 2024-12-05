import TeamsComponent from '@/components/teams2'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Teams",
  description: "Find The Best Fashion Style For You.",
  keywords: "T-Shirt Neon, T-Shirt Neon Yellow, T-Shirt Black, T-Shirt Blacked, Hoodie Black, Hoodie Blaked, Dress, Sweaters",
  openGraph: {
    title: "Teams | Find The Best Fashion Style For You.",
    description: "Unwrap the New Season! Presenting our new collection—bold, stylish, and made for you. Elevate your wardrobe with these must-have pieces!",
    url: "https://msth-clothing.vercel.app/teams",
    type: "website",
    images: [
      {
        url: "/teams.png",
        width: 1200,
        height: 800,
        alt: "MSTH. - Home"
      }
    ]
  }
}

export default function Teams() {
  return (
      <TeamsComponent/>
  )
}
