import Link from 'next/link'
import { useUser } from '../../context/userContext'

import OgpTable from '../../component/OgpTable'

const List = () => {
  // Our custom hook to get context values
  const { user } = useUser()

  return (
    <div className="container-fulid">
      <main>
        <div className="px-3 d-flex bg-light mb-1">
          <h1 className="mr-auto">
            Page List
          </h1>
          <Link href="/create">
            <a role="button" className="btn btn-outline-secondary btn-sm my-auto">追加する</a>
          </Link>
        </div>
        {(user != null) && <OgpTable user={user} />}
      </main>
    </div>
  )
}

export default List