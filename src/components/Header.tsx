import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

const Header = () =>{

    const { data: session } = useSession()

    return(
        <header className="aboslute bg-transparent z-auto flex justify-center  h-20">
            <div className="container  flex items-center justify-between">
                <div className="text-white">
                    {
                        session ? 

                        <>
                            <div className="flex items-center">
                                Signed in as {session.user!.email!}

                            </div>
                        </>
                        :
                        <>
                            Not signed
                        </>
                    }

                </div>

                <div >
                    
                    {
                        session ? 

                        <div className="space-x-7 flex items-center"> 
                            <Image className="rounded-2xl" src={session?.user!.image!} alt="User iamge" width={40} height={40} />              
                            <button className='bg-red-500 rounded-xl text-white p-2' onClick={() => signOut()}>Sign out</button>
                        </div>
                        :
                        <>
                        <button className='bg-green-500 rounded-xl text-white p-2' onClick={() => signIn('github')}>Sign in</button>
                        </>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header