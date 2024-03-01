import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required",
    })
});

export const RegisterSchema = z
    .object({
        email: z.string().email({
            message: "Email is required"
        }),
        password: z.string().min(1, {
            message: "Password is required",
        }),
        cpassword: z.string()
    })
    .refine((data) => data.password === data.cpassword, {
        message: "Passwords don't match",
        path: ["cpassword"],
    });
