import Divider from "@/components/divider";
import { getManSlug, getWomenSlug } from "@/libs/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  let product = await getManSlug(params.slug).catch(() => null);

  if (!product) {
    product = await getWomenSlug(params.slug).catch(() => null);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-10">
      <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-center gap-6 sm:gap-4 mt-20 sm:mt-6">
        <div className="flex h-[300px] sm:h-[200px] w-[300px] sm:w-[200px] lg:h-[400px] lg:w-[400px] justify-center relative">
          <Image
            src={`https:${product.fields.thumbnail.fields.file.url}`}
            alt={product.fields.title}
            fill
            className="object-cover shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-xl sm:text-lg lg:text-4xl font-bold mb-2 sm:mb-4">
            {product.fields.title}
          </h1>
          <Divider />
          <p className="text-lg sm:text-base font-semibold text-base-content mb-2 sm:mb-4">
            {product.fields.prices || "Price not available"}
          </p>

          <div className="text-sm sm:text-xs lg:text-base text-base-content mb-4 sm:mb-6 leading-relaxed">
            {product.fields.descriptions
              ? documentToReactComponents(product.fields.descriptions)
              : "No description available"}
          </div>
          <button className="bg-teal-600 text-white px-4 sm:px-3 py-2 sm:py-1 text-sm sm:text-xs hover:bg-teal-700 transition-all duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
