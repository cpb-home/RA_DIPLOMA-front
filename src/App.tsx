import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Main from './pages/Main/Main'
import About from './pages/About/About'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import Contacts from './pages/Contacts/Contacts'
import Basket from './pages/Basket/Basket'
import Page404 from './pages/Page404/Page404'
import Item from './pages/Item/Item'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { basketSet } from './redux/slices/basketItemsSlice'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const LS = localStorage.getItem('raDiplomaBasketItems');
    if (LS) {
      const LSstr = JSON.parse(LS);
      dispatch(basketSet(LSstr));
    }
  }, []);

  return (
    <Routes>
      <Route path='/RA_DIPLOMA-front' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='catalog' element={<CatalogPage />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='basket' element={<Basket />} />
        <Route path="item/:id" element={<Item />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
