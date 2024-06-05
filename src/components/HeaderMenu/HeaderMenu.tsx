import { NavLink } from "react-router-dom"

const HeaderMenu = () => {
  const selected = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className={selected} to='/RA_DIPLOMA-front/' end>Главная</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={selected} to='/RA_DIPLOMA-front/catalog/'>Каталог</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={selected} to='/RA_DIPLOMA-front/about/'>О магазине</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={selected} to='/RA_DIPLOMA-front/contacts/'>Контакты</NavLink>
      </li>
    </ul>
  )
}

export default HeaderMenu
