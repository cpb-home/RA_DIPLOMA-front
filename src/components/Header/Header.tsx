import HeaderMenu from "../HeaderMenu/HeaderMenu"

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="http://localhost:5173/RA_DIPLOMA-front/img/header-logo.png" alt="Bosa Noga" />
            </a>
            <div className="collapse navbar-collapse" id="navbarMain">
              <HeaderMenu />
              <div>
                <div className="header-controls-pics">

                </div>
                <form data-id="search-form">
                  
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
