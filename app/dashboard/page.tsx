'use client'
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
 
    </main>
  )
}

export default page