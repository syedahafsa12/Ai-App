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

          {/* <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="rounded-full gap-x-2">
              <span className="text-sm">4.2</span>
              <Star className="h-5 w-5" />
            </Button>

            <span className="text-sm text-white transition duration-100">
              56 Ratings
            </span>
          </div> */}

          {/* <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-white md:text-2xl">
                ${data.price}
              </span>
              <span className="mb-0.5 text-red-500 line-through">
                ${data.price + 20}
              </span>
            </div> */}

            {/* <span className="text-sm text-white">
              Incl. Vat plus shipping
            </span> */}
          </div>

          {/* <div className="mb-6 flex items-center gap-2 text-white">
            <Truck className="w-6 h-6" />
            <span className="text-sm">2-4 Day Shipping</span>
          </div> */}

          {/* <div className="flex gap-2.5">
            <AddToBag
              currency="USD"
              description={data.description}
              image={data.images[0]}
              name={data.name}
              price={data.price}
              key={data._id}
              price_id={data.price_id}
            />
            <CheckoutNow
              currency="USD"
              description={data.description}
              image={data.images[0]}
              name={data.name}
              price={data.price}
              key={data._id}
              price_id={data.price_id}
            />
          </div> */}

         
        </div>
      </div>
    </div>

  </main>
  )
  }