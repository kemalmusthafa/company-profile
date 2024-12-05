import { getMan } from "@/libs/contentful";
import { IMan } from "@/types/man";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductMan() {
  const data: IMan[] = await getMan();
  const latestData = data.slice(2, 6);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-5">
      {latestData.map((item, idx) => (
        <div
          key={idx}
          className="flex h-[300px] w-[300px] justify-center items-end relative"
        >
          <Image
            src={`https:${item.fields.thumbnail.fields.file.url}`}
            alt={item.fields.title}
            fill
            className="object-cover"
          />
          <Link
            href={`/product/${item.fields.slug}`}
            className="flex bg-transparent hover:bg-teal-700 h-[40px] w-[200px] justify-center text-center items-center mb-4 text-white font-bold font-mono absolute"
          >
            SEE MORE
          </Link>
        </div>
      ))}
    </div>
  );
}
