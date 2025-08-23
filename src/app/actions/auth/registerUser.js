'use server';
import bcrypt from 'bcrypt'
import dbConnect, { CollectionsName } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const userData = dbConnect(CollectionsName.useCollections)

    // validation
    const { name, email, password, } = payload
    if (!email || !name || !password) return null

    const user = await userData.findOne({ email: payload.email })
    if (!user) {
        const hashedPass = await bcrypt.hash(password, 10)
        payload.password = hashedPass
        const result = await userData.insertOne(payload)
        result.insertedId = result.insertedId.toString()
        return result
    }
    return null
};

export default registerUser;