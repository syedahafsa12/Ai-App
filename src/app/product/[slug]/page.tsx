import React from 'react'
// import AddToBag from "@/components/AddToBag";
// import CheckoutNow from "@/components/CheckOutNow";
import ImageGallery from "@/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "../../app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
// import {client} from "@/app/lib/sanity"
// import { fullProduct } from "@/app/interface";
async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            name,
            description,
            "slug": slug.current,
            "categoryName": category->name,
           
        }`;
  
    const data = await client.fetch(query);
  
    return data;
  }
  export const dynamic = "force-dynamic";

  export default async function ProductPge({
    params,
  }: {
    params: { slug: string };
  }) {
    const data: fullProduct = await getData(params.slug);
    

  return (
    <main>
         <div className="bg-greendark">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <ImageGallery images={data.images} />

        <div className="md:py-52">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-white">
              {data.categoryName}
            </span>
            <h2 className="text-2xl font-bold text-white lg:text-3xl">
              {data.name}
            </h2>
            <p className="mt-5 text-base text-white tracking-wide">
            {data.description}
          </p>
          {/* <h2 className='text-1xl font-bold text-red-600 lg:text-1xl'>DOWNLOAD NOW</h2> */}
          </div>

        
          </div>

         

         
        </div>
      </div>
    </div>

  </main>
  )
  }