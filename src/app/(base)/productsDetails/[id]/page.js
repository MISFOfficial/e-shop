import dbConnect, { CollectionsName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = async ({ params }) => {
    const productId = params;
    const productCollection = await dbConnect(CollectionsName.productCollections);

    const product = await productCollection.findOne({
        _id: new ObjectId(productId.id),
    });

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-light">
                <h2 className="text-3xl font-bold">❌ Product Not Found</h2>
                <p className="mt-2">This product might have been removed.</p>
            </div>
        );
    }

    // Dummy products (offers)
    const dummyOffers = [
        {
            id: "1",
            title: "Classic Polo Shirt",
            price: 39.99,
            oldPrice: 59.99,
            image: "https://i.ibb.co.com/0ytb36vf/bag.webp",
            offer: 30,
        },
        {
            id: "2",
            title: "Trendy Backpack",
            price: 49.99,
            oldPrice: 79.99,
            image: "https://i.ibb.co.com/0ytb36vf/bag.webp",
            offer: 35,
        },
        {
            id: "3",
            title: "Sports Watch",
            price: 89.99,
            oldPrice: 129.99,
            image: "https://i.ibb.co.com/0ytb36vf/bag.webp",
            offer: 25,
        },
    ];

    return (
        <section className="bg-gray-200">
            <div className="py-12 px-6 md:px-16 lg:px-0">
                {/* Main Product */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-8">
                    {/* Left: Product Image */}
                    <div className="flex justify-center">
                        <div className="relative w-full h-96">
                            <Image
                                src={product.image || "/placeholder.png"}
                                alt={product.title}
                                fill
                                className="rounded-xl object-cover shadow-md w-full h-full"
                            />
                            {product.offer && (
                                <span className="absolute bottom-3 right-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
                                    {product.offer}% OFF
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="space-y-5">
                        <h1 className="text-4xl font-extrabold text-gray-800">
                            {product.title}
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {product.description || "No description available."}
                        </p>

                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-[#272785]">
                                ${product.price || "N/A"}
                            </span>
                            {product.oldPrice && (
                                <span className="line-through text-gray-400 text-lg">
                                    ${product.oldPrice}
                                </span>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-6">
                            <button className="px-6 py-3 bg-[#272785] text-white font-semibold rounded-xl shadow-md hover:bg-[#3e3ea0] transition">
                                🛒 Add to Cart
                            </button>
                            <button className="px-6 py-3 bg-white border border-[#272785] text-[#272785] font-semibold rounded-xl shadow-md hover:bg-[#f0f0ff] transition">
                                ❤️ Wishlist
                            </button>
                        </div>

                        {/* Extra Info */}
                        <div className="mt-8 text-sm text-gray-500 space-y-2">
                            <p>✅ Free Shipping on orders over $50</p>
                            <p>📦 Delivery within 3–5 business days</p>
                            <p>🔒 Secure checkout guaranteed</p>
                        </div>
                    </div>
                </div>

                {/* 🔥 Dummy Offers Section */}
                <div className="max-w-6xl mx-auto mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        🎁 Special Offers for You
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {dummyOffers.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition transform"
                            >
                                <div className="relative w-full h-56">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                        {item.offer}% OFF
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-[#272785] font-bold text-xl">
                                            ${item.price}
                                        </span>
                                        <span className="line-through text-gray-400 text-sm">
                                            ${item.oldPrice}
                                        </span>
                                    </div>
                                    {/* <Link href={`/products/${item.id}`}>
                                    <button className="mt-4 w-full px-4 py-2 bg-[#272785] text-white rounded-lg shadow-md hover:bg-[#3e3ea0] transition">
                                        View Details
                                    </button>
                                </Link> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
