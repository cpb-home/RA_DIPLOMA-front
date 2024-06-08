import { NavLink } from "react-router-dom"
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import { useRef, useState } from "react";

const Header = () => {
  const [formView, setformView] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    setformView(!formView);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const formVisibility = formView ? 'header-controls-search-form form-inline' : 'header-controls-search-form form-inline invisible' ;

  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src="http://localhost:5173/RA_DIPLOMA-front/img/header-logo.png" alt="Bosa Noga" />
        </a>
        <div className="navbar-collapse">
          <HeaderMenu />
          <div>
            <div className="header-controls-pics">
              <form className={formVisibility} data-id="search-form">
                <input className="form-control" type="text" ref={inputRef} autoFocus />
              </form>
              <a className="header-controls-pic header-controls-search" onClick={clickHandler}></a>
              <NavLink className={"header-controls-pic header-controls-cart"} to='/RA_DIPLOMA-front/basket/'>
                <div className="header-controls-cart-full">1</div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
