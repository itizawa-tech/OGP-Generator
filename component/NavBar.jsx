import React, { useState } from 'react'
import { useUser } from '../context/userContext'
import firebase from '../lib/firebase/clientApp'
import Link from 'next/link';

import LoginModal from './LoginModal'
import { toastSuccess, toastError } from '../lib/utils/toaster'
import UserPicture from './common/UserPicture'

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
        <Link href="/">
          <a className="navbar-brand mr-auto">OGP Generator</a>
        </Link>
        {user != null && <UserPicture user={user} handleLogout={handleLogout} />}
        {user == null && <button type="button" className="btn btn-info" onClick={toggleModal}>Login</button>}
      </nav>
      <LoginModal handleGoogleLogin={handleGoogleLogin} handleGitHubLogin={handleGitHubLogin} isOpen={isModalOpen} toggle={toggleModal} />

    </React.Fragment>
  )
}

export default Navbar;