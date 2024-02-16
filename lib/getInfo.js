import { db } from "./db";

export async function getUserByName(username){
    try {
        const existingUser = await db.user.findFirst({ where: { username: username } });

        return existingUser;
    } catch (error) {
        return null;
    }
}

export async function getUserByID(id){
    // try {
        const existingUser = await db.user.findFirst({ where: { id: id } });

        return existingUser;
    // } catch (error) {
    //     return null;
    // }
}

