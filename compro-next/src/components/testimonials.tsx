import React from "react";
import Divider from "./divider";
import Image from "next/image";

const testimonials = [
  {
    name: "Katherine Lebouf",
    title: "Fashion Week Runner Up",
    feedback:
      "I’m really happy with the product quality here! The fabric is soft, the stitching is neat, and the colors don’t fade even after multiple washes. The size fits perfectly as described. Fast delivery and neatly packaged. Definitely buying again!",
    imgSrc: "https://randomuser.me/api/portraits/women/62.jpg",
  },
  {
    name: "John Sheriff",
    title: "Nike Project Manager",
    feedback:
      "The designs are cool and trendy, just like in the photos! I bought a hoodie and a T-shirt, and both are super comfortable for all-day wear. The price is affordable for this kind of quality. The customer service is also very responsive, making shopping here even better. Highly recommended!",
    imgSrc: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Milla Muller",
    title: "Design Visual of Puma",
    feedback:
      "The product arrived quickly and met my expectations! The fabric is cool and comfortable, especially for hot weather. The size chart is accurate, so I didn’t have to worry about it being too big or too small. I’m glad I found a store I can rely on like this!",
    imgSrc: "https://randomuser.me/api/portraits/women/51.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-base-200 text-black dark:text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
          TESTIMONIALS
        </h2>
        <div className="flex justify-center my-5">
          <Divider />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 md:p-10 bg-white rounded-t-[150px] rounded-br-[100px] shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 relative">
                <Image
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-black text-lg md:text-2xl font-semibold text-center">
                {testimonial.name}
              </h4>
              <p className="text-teal-700 font-mono text-sm md:text-base text-center">
                {testimonial.title}
              </p>
              <p className="text-gray-700 text-center mt-4 italic text-sm md:text-base">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
