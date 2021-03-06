import Head from 'next/head'
import { useEffect } from 'react'
import { useUser } from '../context/userContext'
import firebase from '../lib/firebase/clientApp'

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

      </main>

    </div>
  )
}
