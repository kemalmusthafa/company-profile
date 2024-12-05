import Divider from "@/components/divider";
import Testimonials from "@/components/testimonials";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Find The Best Fashion Style For You.",
  keywords: "T-Shirt Neon, T-Shirt Neon Yellow, T-Shirt Black, T-Shirt Blacked, Hoodie Black, Hoodie Blaked, Dress, Sweaters",
  openGraph: {
    title: "About | Find The Best Fashion Style For You.",
    description: "Unwrap the New Season! Presenting our new collection—bold, stylish, and made for you. Elevate your wardrobe with these must-have pieces!",
    url: "https://msth-clothing.vercel.app/about",
    type: "website",
    images: [
      {
        url: "/about.png",
        width: 800,
        height: 800,
        alt: "MSTH. - Home"
      }
    ]
  }
}

export default function About() {
  return (
    <div className="flex flex-col gap-5 overflow-x-hidden">
      <div className="hero bg-white dark:bg-black min-h-screen">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="w-full max-w-screen-lg object-cover shadow-2xl">
            <div className="h-[300px] w-[350px] md:h-[500px] md:w-[650px] relative">
            <Image
              src="/banner1.png"
              alt="banner"
              fill
            />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-auto p-5 lg:p-[50px]">
        <h1 className="text-center text-xl md:text-2xl font-bold">ABOUT US</h1>
        <div className="flex justify-center my-5">
          <Divider />
        </div>
        <p className="text-justify text-sm md:text-base lg:max-w-3xl mx-auto leading-relaxed font-bold font-mono p-[50px]">
          Welcome to MSTH, where style meets comfort! Founded in 2024, MSTH is a
          fresh, dynamic clothing brand dedicated to creating high-quality,
          trend-driven apparel that resonates with today’s lifestyle. Born out
          of a passion for design and a commitment to quality, MSTH aims to
          provide clothing that not only looks good but also feels great to
          wear. At MSTH, we believe that every piece of clothing should be a
          reflection of individuality and self-expression. Our collections are
          carefully curated with a focus on unique designs, comfortable fabrics,
          and a fit that suits a variety of personal styles. From essential
          everyday pieces to standout statement items, MSTH offers clothing that
          fits seamlessly into your wardrobe and life. As a new player in the
          fashion industry, we’re committed to growing responsibly and
          sustainably. We prioritize ethically sourced materials and work with
          partners who share our vision for quality and fairness. Whether you’re
          dressing up or keeping it casual, MSTH is here to help you look and
          feel your best every day. Thank you for joining us on this journey.
          We’re excited to grow with you and bring style, comfort, and
          confidence to wardrobes everywhere.
        </p>
      </div>
      <div className="w-screen">
      <Testimonials />
      </div>
    </div>
  );
}
