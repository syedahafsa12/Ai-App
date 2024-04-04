import Link from "next/link";
import { client } from "../app/app/lib/sanity";
import React from "react";
import { simplifiedProduct } from "../app/interface";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = ` *[_type == 'product'][0...8] | order(_createdAt desc)
  {
    _id,
      name,
      "slug":slug.current,
      "categoryName":category->name,
      "imageUrl":images[0].asset->url
      
  }`;

  const data = await client.fetch(query);

  return data;
}

async function Newest() {
  const data: simplifiedProduct[] = await getData();
  return (
    <main className="">
      <div className="bg-greendark">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center ">
            <h2 className="text-5xl font-bold tracking-tight text-white ml-96 text-app   ">
              AI Generated Images
            </h2>
            {/* <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link> */}
          </div>

        
    
<div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  object-cover ml-28 images-card">
  {data.map((product) => (
    <div key={product._id} className="group relative text-bold ">
      <Link href={`/product/${product.slug}`}>
        <div className="">
          <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
            <Image
              src={product.imageUrl}
              alt="Product image"
              className="w-full h-full object-cover object-center lg:h-full lg:w-full "
              width={300}
              height={300}
            />
          </div>
          <div className="mt-4 flex justify-between ">
            <div>
              <h3 className="text-sm text-white ">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-200">{product.categoryName}</p>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">${product.price}</p> */}
          </div>
        </div>
      </Link>
    </div>
          ))}
        </div>
        </div>
      </div>
    </main>
  );
}

export default Newest;