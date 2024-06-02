import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Main from './pages/Main/Main'
import About from './pages/About/About'
import Catalog from './pages/Catalog/Catalog'
import Contacts from './pages/Contacts/Contacts'
import Basket from './pages/Basket/Basket'
import Page404 from './pages/Page404/Page404'
import Item from './pages/Item/Item'

function App() {

  return (
    <Routes>
      <Route path='/RA_DIPLOMA-front' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='basket' element={<Basket />} />
        <Route path='404' element={<Page404 />} />
        <Route path='catalog/:id' element={<Item />} />
      </Route>
    </Routes>
  )
}

export default App
