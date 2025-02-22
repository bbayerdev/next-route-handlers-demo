import React from 'react'

const page = async () => {

    const data = await fetch('http://localhost:3000/api/exemple')
    console.log(data)

  return (
    <div>page</div>
  )
}

export default page