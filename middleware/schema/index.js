import { z } from 'zod';

export const LoginSchema = z.object({
    username: z.string().min(1) || z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required",
    })
});

export const RegisterSchema = z.object({
    username: z.string().min(1) || z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required",
    })
});