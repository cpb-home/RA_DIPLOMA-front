const Contacts = () => {
  return (
    <div className="mainCont">
      <h1>Контакты.</h1>
      <div className="contactsCont">
        <div className="contactsBlockItem">
          Телефон для связи: <a href="tel:+74951903503">+7 (495) 190-35-03</a>
        </div>
        <div className="contactsBlockItem">
          Наш адрес: <a href="https://yandex.ru/maps/213/moscow/?ll=37.624473%2C55.751352&z=15.59" target="blank">Москва, Красная Площадь, ГУМ</a>
        </div>
        <div className="contactsBlockItem">
          e-mail: <a href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
        </div>
        <div className="contactsBlockItem">
          График работы: ежедневно с 09-00 до 21-00
        </div>
      </div>
    </div>
  )
}

export default Contacts
