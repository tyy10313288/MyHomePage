import './App.css'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {  
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Profile />
        <Skills />
        <Works />
        <Contact />
      </main>
    </>
  )
}

export default App
