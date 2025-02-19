'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { formSchema, UserNameFormData } from '../schemas/userNameSchema'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserNameFormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: UserNameFormData) => {
    try {
      const res = await fetch('api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await res.json()
      console.log(result)

      if (res.status === 200) {
        toast({
          title: `Welcome! ${data.name} 🎉🎉`,
          duration: 2000,
        })
      }
    }
    catch (erro) {
      console.error
    }
  }

  return (
    <main className="flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Label htmlFor="name" className="font-bold">Name</Label>npm install @hookform/resolvers zod
        <Input {...register('name')} type="text" id="name" placeholder="Type your name" />
        {errors.name && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}

        <Label className="text-neutral-500">This is your public display name.</Label>
        <Button type="submit" variant={'secondary'} className="w-min mt-3">Send</Button>
      </form>
      <Toaster />
    </main>
  )
}


