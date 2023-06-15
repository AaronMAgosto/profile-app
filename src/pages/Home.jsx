import AppLayout from '../AppLayout'
import Header from '../layout/Header'
import Characteristics from '../layout/Characteristics'
import Projects from '../layout/Projects'
import Skills from '../layout/Skills'
import Certs from '../layout/Certs'
import AboutPPF from '../layout/AboutPPF'

export default function Home() {

  return (
    <AppLayout>
      <Header/>
      <Characteristics/>
      <Projects/>
      <Skills/>
      <Certs/>
      <AboutPPF/>
    </AppLayout>
  )
}