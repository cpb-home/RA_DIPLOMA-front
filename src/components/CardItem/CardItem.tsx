import { NavLink } from "react-router-dom"
import { ICatalogItem } from "../../models/interfaces"

const CardItem = ({ id, title, price, images }: ICatalogItem) => {


  return (
    <div className="cardItem">
      <div className="cardImgCont">
        <img src={images[0]} alt={title} />
      </div>
      <div className="cardInfoCont">
        <span className="cardTitle">{title}</span>
        <span className="cardPrice">{price} руб.</span>
        <NavLink className="cardButtonLink" to={`/RA_DIPLOMA-front/catalog/:${id}`}>
          <button className="cardButton" type="button">Заказать</button>
        </NavLink>
      </div>
    </div>
  )
}

export default CardItem
