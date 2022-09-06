import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

import Banner from '../components/Banner'

const Home: NextPage = () => {
  const { data: session,status } = useSession()

  return (
		<>
			<Head>
				<title>{session ? "LogOut" : "LogIn"}</title>
			</Head>
			<>
				<Banner />
				{session ? (
					<div className="transition-all bg-white h-screen scroll-smooth">
						<h1 className="text-6xl h-40 flex justify-center items-center font-bold">
							session status
						</h1>

						<div className="flex flex-col items-center">
							{<span>End Session: {session?.expires}</span>}
							{<span>Email: {session?.user?.email}</span>}
							{<span>Name: {session?.user?.name}</span>}
							{
								<a className=" hover:text-greene" href={session?.user?.image!}>
									{" "}
									Url Avatar
								</a>
							}
						</div>
					</div>
				) : (
					<></>
				)}
			</>
		</>
	);
}

export default Home
