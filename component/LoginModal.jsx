import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const LoginModal = (props) => {
  return (
    < Modal isOpen={props.isOpen} toggle={props.toggle} >
      <ModalHeader toggle={props.toggle}>ユーザーログイン</ModalHeader>
      <ModalBody className="row">
        <div className="offset-1 col-10 d-flex">
          <Button className="mr-auto" outline color="primary" onClick={props.handleGoogleLogin}>
            <i className="fab fa-google"></i> Google
            </Button>
          <Button className="mr-auto" outline color="primary" onClick={props.handleGitHubLogin}>
            <i className="fab fa-github"></i> GitHub
            </Button>
          <Button disabled outline color="primary">
            <i className="fab fa-twitter"></i> Twitter
          </Button>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.toggle}>キャンセル</Button>
      </ModalFooter>
    </Modal >
  )
}

export default LoginModal;