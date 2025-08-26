'use server'

import dbConnect, { CollectionsName } from "@/lib/dbConnect";

const productsAdd = async (payload) => {

    const { title, price, description, image } = payload

    if (!title, !price, !description, !image) return

    const productsData = dbConnect(CollectionsName.productCollections)
    const result = await productsData.insertOne(payload)

    return result

};

export default productsAdd;