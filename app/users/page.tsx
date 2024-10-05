import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
  searchParams: { sortOrder: string}
}

const UserPage = async ({searchParams: {sortOrder}}: Props) => {
  return (
    <>
    <h1>Users</h1>
    <Link href="/user/new" className='btn btn-regular'>NEW USER</Link>
    {/* <p>{new Date().toLocaleTimeString()}</p>  */}
    <Suspense fallback={<p>Loading...</p>}>
       <UserTable sortOrder={sortOrder}/>
    </Suspense>
    </>
  )
}

export default UserPage