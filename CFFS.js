
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()
  return (
    <header className='bg-[#1a1a1a] p-6 flex items-center justify-between shadow'>
      <Link href='/'>
        <Image src='/logo.png' alt='Logo' width={180} height={85} priority className='cursor-pointer' />
      </Link>
      <nav className='space-x-4'>
        {session ? (
          <>
            <Link href='/profile' className='px-4 py-2 border border-gray-400 rounded hover:bg-white hover:text-black transition'>
              Profil
            </Link>
            {session.user.role === 'admin' && (
              <Link href='/admin' className='px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition'>
                Admin
              </Link>
            )}
            <button onClick={() => signOut()} className='px-4 py-2 text-red-400 hover:text-red-300'>
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link href='/auth/signin' className='px-4 py-2 border border-gray-400 rounded hover:bg-white hover:text-black transition'>
              Connexion
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
