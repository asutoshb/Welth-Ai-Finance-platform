import { SignUp } from '@clerk/nextjs'
import React from 'react'
// [[catch all route folder inside app]]
// allows to sign-in/ to add things after this route from clerk
const Page = () => {
  return (
    <SignUp />
  )
}

export default Page