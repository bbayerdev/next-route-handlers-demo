'use client'
import { Loader } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface User {
    id: number
    name: string
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
                    <h1 className='text-2xl font-bold'>Users's list</h1>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id} className="p-2 border-b last:border-none">
                                {user.name}
                            </li>
                        ))}
                    </ul>
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