import Link from 'next/link';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const UserPicture = (props) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="a" className="nav-link p-0" caret={false}>
        <img height="40" src={props.user.photoURL} />
      </DropdownToggle>
      <DropdownMenu right>
        <Link href="/admin/list">
          <DropdownItem className="text-decoration-none">
            <a>OGP 管理</a>
          </DropdownItem>
        </Link>
        <DropdownItem onClick={props.handleLogout}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserPicture