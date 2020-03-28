import Head from 'next/head'
import { useEffect } from 'react'
import { useUser } from '../context/userContext'
import firebase from '../firebase/clientApp'
import Link from 'next/link';

export default () => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log(user)
    }
    // You also have your firebase app initialized
    console.log(firebase)
  }, [loadingUser, user])

  return (
    <div className="container">
      <Head>
      </Head>

      <main>

        <h1>
          <Link href="/create">
            Create
          </Link>
        </h1>

      </main>

    </div>
  )
}
