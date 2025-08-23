'use server'
import dbConnect, { CollectionsName } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

const loginUser = async (payload) => {
    const { email, password } = payload
    const userCollection = dbConnect(CollectionsName.useCollections)
    const user = await userCollection.findOne({ email })

    if (!user) {
        return null
    }

    const isPasswordOk =await bcrypt.compare(password, user.password)
    // console.log(user)

    if (!isPasswordOk) {
        return null
    }
    else {
        // console.log('password ok', isPasswordOk)
        return user
    }
};

export default loginUser;