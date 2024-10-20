'use client'
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import { toast } from 'react-toastify';

function SignOutLink() {
  const handleLogout = () => {
    toast.error('Logout Successful')
  }

  return (
    <SignOutButton>
      <Link href='/' className='w-full text-center py-2 bg-gray-300 lg:text-lg hover:bg-gray-400 block text-white ' onClick={handleLogout}>
      Logout</Link>
    </SignOutButton>
  )
}

export default SignOutLink