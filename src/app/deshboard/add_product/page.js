"use client";

import productsAdd from "@/app/actions/auth/productsAdd";
import { useState } from "react";
import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    // const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await productsAdd({ title, image, description, price })

        console.log(res)
        if (res?.acknowledged === true) {
            toast.success("✅ Product added successfully!", {
                position: "top-center",
                autoClose: 3000,
            });

            // reset form
            setTitle("");
            setImage("");
            setDescription("");
            setPrice("");
        } else {
            toast.error("❌ Failed to add product!", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    }
    return (
        <div className="h-full flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-dark">
                    Add New Product
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Product Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-gray-800 border text-dark"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-gray-800 border text-dark"
                        required
                    />

                    <textarea
                        placeholder="Product description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-gray-800 border text-dark"
                        rows="4"
                        required
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-gray-800 border text-dark"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;