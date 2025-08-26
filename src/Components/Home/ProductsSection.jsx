// "use client";

import dbConnect, { CollectionsName } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";



export default async function ProductsSection() {

  const productCollections = dbConnect(CollectionsName.productCollections)

  const products = await productCollections.find({}).limit(3).toArray()

  // console.log(products.map(m=> m._id))

  return (
    <section className="">
      <div>
        <h2 className="text-4xl font-extrabold text-dark mb-10 text-center">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{product.title}</h3>
                <p className="text-dark mb-4">{product.description}</p>
                <Link
                  href={`/productsDetails/${product._id}`}
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full shadow hover:bg-purple-500 transition duration-300"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
