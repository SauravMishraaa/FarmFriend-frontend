import Header from "@/components/ui/Header";
import { homeConfig } from "@/config/Home";

// type Props = {};

// const page = (props: Props) => {
//     return (
//         <>
//             <Header items={homeConfig.mainNav} />
            
//         </>
//     );
// };

// export default page;
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function ProductCard({title, img, rate }) {
  return (
    <div className="w-[300px] rounded-md border bg-gray-800">
      <img
        src={img}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-400">
          Rate per kg: {rate}
        </p>
        {/* <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div> */}
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  )
}
export default ProductCard;