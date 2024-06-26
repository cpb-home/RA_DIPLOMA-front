import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="col">
        <section>
          <h5>Информация</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className='nav-link' to={'/RA_DIPLOMA-front/about/'}>О магазине</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/RA_DIPLOMA-front/catalog/'>Каталог</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/RA_DIPLOMA-front/contacts/'>Контакты</NavLink>
            </li>
          </ul>
        </section>
      </div>
      <div className="col">
        <section>
          <h5>Принимаем к оплате:</h5>
          <div className="footer-pay">
            <div className="footer-pay-systems footer-pay-systems-paypal"></div>
            <div className="footer-pay-systems footer-pay-systems-master-card"></div>
            <div className="footer-pay-systems footer-pay-systems-visa"></div>
            <div className="footer-pay-systems footer-pay-systems-yandex"></div>
            <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
            <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
          </div>
        </section>
        <section>
          <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
            Все права защищены.<br />Доставка по всей России!
          </div>
        </section>
      </div>
      <div className="col text-right">
        <section className="footer-contacts">
          <h5>Контакты:</h5>
          <a className="footer-contacts-phone" href="tel:+74951903503">+7 (495) 190-35-03</a>
          <span className="footer-contacts-working-hours"> Ежедневно: с 09-00 до 21-00</span>
          <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
        </section>
      </div>
    </footer>
  )
}

export default Footer
