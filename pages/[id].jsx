import Head from 'next/head'
import { useEffect } from 'react'
import { useUser } from '../context/userContext'
import axios from 'axios'

const Page = (props) => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  return (
    <div className="container">
      <Head>
        <meta property="og:title" content={props.query.id} />
      </Head>

      <main>
        {props.query.id}
      </main>

    </div>
  )
}


Page.getInitialProps = async function ({ query }) {
  // TODO page data
  return { query };
};

export default Page