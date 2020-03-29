import Head from 'next/head'
import { useUser } from '../../context/userContext'

import OgpTable from '../../component/OgpTable'

const List = () => {
  // Our custom hook to get context values
  const { user } = useUser()

  return (
    <div className="container-fulid">
      <main>
        {(user != null) && <OgpTable user={user} />}
      </main>
    </div>
  )
}

export default List