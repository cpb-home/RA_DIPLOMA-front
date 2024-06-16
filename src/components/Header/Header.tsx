import { NavLink, useNavigate } from "react-router-dom"
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setText } from "../../redux/slices/searchSlice";

const Header = () => {
  const navigate = useNavigate();
  const [formView, setformView] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const basketItemsCount = useAppSelector((state) => state.basketItems.items.length);
  const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.searchText);

  const clickHandler = () => {
    if (searchText.searchText) {
      setformView(!formView);
      if (formView) {
        navigate('/RA_DIPLOMA-front/catalog/');
      }
    } else {
      setformView(!formView);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.searchText && searchText.searchText !== '') {
      setformView(!formView);
      navigate('/RA_DIPLOMA-front/catalog/');
    }
  }

  const formVisibility = formView ? 'header-controls-search-form form-inline' : 'header-controls-search-form form-inline invisible' ;

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setText(value));
  }

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
              <form className={formVisibility} data-id="search-form" onSubmit={submitHandler}>
                <input className="form-control" type="text" ref={inputRef} onChange={searchInputHandler} autoFocus />
              </form>
              <a className="header-controls-pic header-controls-search" onClick={clickHandler}></a>
              <NavLink className={"header-controls-pic header-controls-cart"} to='/RA_DIPLOMA-front/basket/'>
                {basketItemsCount > 0 && <div className="header-controls-cart-full">{basketItemsCount}</div>}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
