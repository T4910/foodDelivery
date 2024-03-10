"use server"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

const addToCart = async ({path, ...data}) => {
    console.log('Adding to cart', data)

    try {
        // data - {foodId, userId, quantity}
       const added = await db.cartItem.create({data}) 
       console.log('Added to cart', added)
    } catch (error) {
        console.log('error adding to cart: ', error)
    }

    revalidatePath(path);
}

const removeFromCart = async ({path, ...data}) => {
    console.log('Remove from cart', data)

    try {
        // data - {foodId, userId}
        const removed = await db.cartItem.delete({where: data})
        console.log('Removed from cart', removed)
    } catch (error) {
        console.log('error removing from cart: ', error)
    }

    revalidatePath(path)
}

const updateQty = async ({path, ...data}) => {
    console.log('Updating cart', data)

    try {
        // data - {foodId, userId, quantity}
        const updated = await db.cartItem.update({where: {foodId: data.foodId, userId: data.userId}, data: {quantity: data.quantity}})
        console.log('Updated cart', updated)
    } catch (error) {
        console.log('error updating cart: ', error)
    }

    revalidatePath(path)
}

export { addToCart, removeFromCart, updateQty }