import {auth, signIn, signOut} from '@/auth';
import Link from 'next/link';
import React from 'react'

const NavBar = async () => {
  const session = await auth();
  return (
    <header>
      <nav>
        <Link href="/" /> Logo

        <div>
          {session && session?.user ? (
            <>
            <Link href={`/user/${session?.user?.id}`}>
            <span>{session?.user?.name}</span>
            </Link>
            <form action={async() => {
              "use server";
              await signOut({redirectTo : '/'});
            }}>
              <button type='submit'>Logout</button>
            </form>
            </>
          ): (
            <>
            <form action={async() => {
              "use server";
              await signIn("github");
            }}>
              <button type='submit'>Login</button>
            </form>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default NavBar