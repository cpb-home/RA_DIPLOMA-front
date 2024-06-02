import { NavLink } from "react-router-dom"

const HeaderMenu = () => {
  const selected = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-item active' : 'nav-item';

  return (
    <ul className="navbar-nav mr-auto">
      <li>
        <NavLink className={selected} to='/RA_DIPLOMA-front/'>Главная</NavLink>
      </li>
      <li>
        <NavLink className={selected} to='/RA_DIPLOMA-front/catalog/'>Каталог</NavLink>
      </li>
      <li>
        <NavLink className={selected} to='/RA_DIPLOMA-front/about/'>О магазине</NavLink>
      </li>
      <li>
        <NavLink className={selected} to='/RA_DIPLOMA-front/contacts/'>Контакты</NavLink>
      </li>
    </ul>
  )
}

export default HeaderMenu
