import NavMenu from './layout/NavMenu'
import Footer from './layout/Footer'


export default function AppLayout ({children}) {

  return (
    <>
    <NavMenu/>
    {children}
    <Footer/>
    </>
  )
}