import Head from 'next/head'
import axios from 'axios'

import PageListBody from '../component/PageListBody'

const PageList = (props) => {

  return (
    <div className="container">
      <Head>
      </Head>
      

      <main>
        <h1><i className="fas fa-chevron-circle-left mr-2"/>Page List</h1>
        <div className="table-responsive">
          <table className="table table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th width="300px">#</th>
                <th width="100px">status</th>
                <th>status</th>
                <th>status</th>
              </tr>
            </thead>
            {props.pages.length > 0 && <PageListBody pages={props.pages} />}
          </table>
        </div>
      </main>

    </div>
  )
}

PageList.getInitialProps = async function () {
  const userToken = 'idOxGrHDB4uIrxXmR0mQt+W8Dt1w3AGIdoBL4jz0GB4='
  try {
    const res = await axios.get(`https://tips.weseek.co.jp/_api/search?${userToken}`,{ params: { q: '用語集',limit: 10 } })
    const pages = res.data.data
    // console.log(page)
    return {pages}
  } catch (err) {
    console.log(err)
    const pages = []
    return {pages}
  }
};

export default PageList