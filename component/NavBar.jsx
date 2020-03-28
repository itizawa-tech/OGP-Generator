import React, { useState } from 'react'
import { useUser } from '../context/userContext'
import firebase from '../firebase/clientApp'

import LoginModal from './LoginModal'
import { toastSuccess, toastError } from '../lib/utils/toaster'

const Navbar = (props) => {
  // Our custom hook to get context values
  const { user } = useUser()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = async () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleGoogleLogin = async () => {
    let AuthenticatedUser = {}
    try {
      const { user } = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      AuthenticatedUser = user
      toastSuccess('Google Login に成功しました。')
    } catch (err) {
      toastError(err)
    }
    setIsModalOpen(!isModalOpen)
  }

  const handleGitHubLogin = async () => {
    try {
      await firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
      toastSuccess('GitHub Login に成功しました。')
    } catch (err) {
      console.log(err)
      toastError(err)
    }
    setIsModalOpen(!isModalOpen)
  }

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut()
      toastSuccess('ログアウトしました')
    } catch (err) {
      toastError(err)
    }
  }

  return (
    <React.Fragment>

      <nav className="navbar navbar-dark bg-dark text-white">
        <a className="navbar-brand mr-auto">OGP Generator</a>
        {user != null && <img className="mr-2" height="40" src={user.photoURL} />}
        {user == null ? <button type="button" className="btn btn-info" onClick={toggleModal}>Login</button>
          : <button type="button" className="btn btn-info" onClick={handleLogout}>Logout</button>}
      </nav>
      <LoginModal handleGoogleLogin={handleGoogleLogin} handleGitHubLogin={handleGitHubLogin} isOpen={isModalOpen} toggle={toggleModal} />

    </React.Fragment>
  )
}

export default Navbar;