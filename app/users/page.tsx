'use client'
import { Button } from '@/components/ui/button'
import { Loader, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface User {
    id: number
    name: string
    createdIn: string
}

const page = () => {
    const [users, setUsers] = useState<User[]>([])

    async function fetchUsers() {
        const res = await fetch('/api/user')
        const result: User[] = await res.json()
        setUsers(result)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <main className='flex flex-col justify-center items-center h-screen gap-2'>

            {users.length > 0 ? (

                <div>
                    <Table>
                        <TableCaption>A list of all users</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Created in</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{new Date(user.createdIn).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <Button size={'icon'} variant={'ghost'} className='hover:bg-red-600/80'>
                                            <Trash />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ) : (
                <div className='flex gap-2'>
                    <Loader className='animate-spin' />
                    <p>fetching users</p>
                </div>
            )}
        </main>
    )
}

export default page