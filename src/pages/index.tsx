import Head from 'next/head';
import type { NextPage } from 'next';
import { signIn, signOut } from 'next-auth/react';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simple Auth | dev-0.3</title>
      </Head>

      <div className='container mx-auto h-screen flex items-center justify-center'>
          <button className='text-white' onClick={() => signIn('github')}>Login</button>
      </div>

    </>
  )
}

export default Home
