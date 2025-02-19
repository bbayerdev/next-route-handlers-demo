import * as z from "zod"

export const formSchema = z.object({
    name: z.string().min(2,{
        message: 'Username must be at 2 characters.'
    })
})

export type UserNameFormData = z.infer<typeof formSchema>