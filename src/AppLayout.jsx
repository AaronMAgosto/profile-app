import NavMenu from './layout/NavMenu'
import AboutPPF from './layout/AboutPPF'
import Certs from './layout/Certs'
import Characteristics from './layout/Characteristics'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Projects from './layout/Projects'
import Skills from './layout/Skills'

export default function AppLayout ({children}) {

  return (
    <>
    <NavMenu/>
    {children}
    <Footer/>
    </>
  )
}