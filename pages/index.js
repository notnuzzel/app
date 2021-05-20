
import { signOut, useSession } from 'next-auth/client'
import Landing from '../components/landing/'

export default function Home() {
  const [ session, loading ] = useSession()
  return <>
    {!session && <Landing/>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}
