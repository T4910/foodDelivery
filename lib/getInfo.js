import { db } from "./db";

export async function getUserByEmail(email){
    try {
        const existingUser = await db.user.findFirst({ where: { email: email } });

        return existingUser;
    } catch (error) {
        return null;
    }
}

export async function getUserByID(id){
    try {
        const existingUser = await db.user.findFirst({ where: { id: id } });

        return existingUser;
    } catch (error) {
        return null;
    }
}

