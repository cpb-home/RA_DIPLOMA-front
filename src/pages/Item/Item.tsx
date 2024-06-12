import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchItemInfo } from "../../redux/slices/itemCardSlice";

const Item = () => {
  const { id } = useParams();
  const itemCard = useAppSelector((state) => state.itemCard);
  const [itemsCount, setItemsCount] = useState(1);
  const dispatch = useAppDispatch();
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    dispatch(fetchItemInfo(Number(id)));
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!Number.isNaN(val)){
      if (val === 0) {
        setItemsCount(1);
      } else {
        setItemsCount(val);
      }
    }
  };

  const clickHandlerCount = (todo: string) => {
    switch (todo) {
      case 'plus':
        setItemsCount(itemsCount + 1);
        break;
      case 'minus':
        (itemsCount - 1) < 1 ? setItemsCount(1) : setItemsCount (itemsCount - 1);
    }
  }

  const clickHandlerShop = async (formdata) => {
    console.log({
      sizes: formdata.get('sizes')
    });
  }

  const selectSizeHandler = () => {
    setBtnDisabled(false);
  }

  return (
    <article className="mainArticle">
      {itemCard.loading && <div className="itemPage"><div className="preloader"><span></span><span></span><span></span><span></span></div></div>}
      {itemCard.itemInfo && 
        <div className="itemPage">
          <h1>{itemCard.itemInfo.title}</h1>
          <div className="itemCont">
            <div className="itmsImgCont">
              <img src={itemCard.itemInfo.images[0]} alt={itemCard.itemInfo.title} />
            </div>
            <form className="itemInfoCont" action={clickHandlerShop}>
              <table className="itemInfoTable">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{itemCard.itemInfo.sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{itemCard.itemInfo.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{itemCard.itemInfo.color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{itemCard.itemInfo.material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{itemCard.itemInfo.season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{itemCard.itemInfo.reason}</td>
                  </tr>
                </tbody>
              </table>
              <div className="itemPriceCont">
                {itemCard.itemInfo.price} руб.
              </div>
              <div className="itemSizesCont">
                Размеры в наличии: {
                  itemCard.itemInfo.sizes.map((e, i) => e.available ? 
                    <label className="itemSizeLabel" key={i}>
                      <span className="itemSizeEl">{e.size}</span>
                      <input type="radio" name="sizes" value={e.size} onChange={selectSizeHandler} />
                    </label> : '')
                  }
              </div>
              <div className="itemCountCont">
                <span>Количество: </span>
                <button className="itemChangeCountBtn" type="button" onClick={() => clickHandlerCount('minus')}>-</button>
                <input value={itemsCount} onChange={changeHandler} type="text" pattern="[0-9]*" />
                <button className="itemChangeCountBtn" type="button" onClick={() => clickHandlerCount('plus')}>+</button></div>
              <button className="itemBuyBtn" type="button" onClick={clickHandlerShop} disabled={btnDisabled}>В корзину</button>
            </form>
          </div>
        </div>
      }
    </article>
  )
}

export default Item