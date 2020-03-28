import UserProvider from '../context/userContext'
import Navbar from '../component/NavBar'

// Custom App to wrap it with context provider
export default ({ Component, pageProps }) => (
  <UserProvider>
    <Navbar {...pageProps} />
    <Component className="container-fluid" {...pageProps} />
  </UserProvider>
)
