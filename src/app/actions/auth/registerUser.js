'use server';

import bcrypt from 'bcrypt'
import dbConnect, { CollectionsName } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    const userData = dbConnect(CollectionsName.useCollections)

    // validation
    const { name, email, password, } = payload
    if (!email || !name || !password) return { success: false }

    const user = await userData.findOne({ email: payload.email })
    if (!user) {
        const hashedPass = await bcrypt.hash(password, 10)
        payload.password = hashedPass
        const result = await userData.insertOne(payload)
        return result
    }
    return { success: false }
};

export default registerUser;