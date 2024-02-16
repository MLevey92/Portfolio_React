import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/footer';

import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
