import Head from 'next/head'

const Page = (props) => {

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