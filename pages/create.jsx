import { useState } from 'react'
import { useUser } from '../context/userContext'
import Link from 'next/link'
import axios from 'axios'

import { toastSuccess, toastError } from '../lib/utils/toaster'

const create = (props) => {

  // Our custom hook to get context values
  const { loadingUser, user } = useUser()
  const [siteUrl, setSiteUrl] = useState('')
  const [cardTitle, setCardTitle] = useState('')
  const [cardDesc, setCardDesc] = useState('')
  const [ogpId, setOgpId] = useState('')

  const saveHandler = async () => {
    try {
      const response = await axios.post('api/ogp', { siteUrl, cardTitle, cardDesc })
      const { id } = response.data
      setOgpId(id)
      toastSuccess('セーブに成功しました')
    } catch (err) {
      toastError(err)
    }
  }

  return (
    <div className="container">

      <main>
        <h1>Create New Link</h1>
        <div className="row">
          <div className="col-md-6">
            <h2>Editor</h2>
            <div className="form-group">
              <label htmlFor="siteUrl">Site Url:</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="siteUrl-addon">https://</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Urlを入力してください"
                  id="siteUrl"
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cardTitle">Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="タイトルを入力してください"
                id="cardTitle"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardDesc">Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="説明文を入力してください"
                id="cardDesc"
                value={cardDesc}
                onChange={(e) => setCardDesc(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-outline-primary" onClick={saveHandler}>保存する</button>
            </div>
            {ogpId !== '' && <div className="my-3 alert alert-info"><Link href={`/${ogpId}`}><a>{ogpId}</a></Link></div>}
          </div>
          <div className="col-md-6">
            <h2>Preview</h2>
            <div className="p-3 border rounded">
              {user != null ?
                <div className="d-flex">
                  <img className="mr-2" height="32" src={user.photoURL} />
                  <h3>{user.displayName}</h3>
                </div> :
                <div className="d-flex">
                  <h3><i className="fas fa-user" height="32" /> ゲストユーザー</h3>
                </div>
              }
              <div className="card">
                <img className="card-img-top" src="/7968.jpg" alt="Card image cap" height="220" />
                <div className="card-body">
                  <strong className="card-title">{cardTitle === "" ? 'タイトルが入ります' : cardTitle}</strong>
                  <p className="card-text">{cardDesc === "" ? '説明文が入ります' : cardDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default create