import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks"
import React, { useState } from "react";
import { basketClear, basketRemove } from "../../redux/slices/basketItemsSlice";

interface sendItem {
  id: number;
  price: number;
  count: number;
}

const Basket = () => {
  const basketItems = useAppSelector((state) => state.basketItems);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [formData, setFormdata] = useState({phone: '', address: ''});
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  if (basketItems.items.length > 0) {
    localStorage.setItem('raDiplomaBasketItems', JSON.stringify(basketItems.items));
  }

  const checkBoxHandler = () => {
    setBtnDisabled(!btnDisabled);
  }

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setBtnDisabled(true);
    setTimeout(() => {
      setBtnDisabled(false)
    }, 3000);
    if (formData.phone === '') {
      setMessage('Номер телефона должен быть указан');
      setTimeout(() => {
        setMessage('');
      }, 3000)
    } else if (formData.address === '') {
      setMessage('Адрес должен быть указан');
      setTimeout(() => {
        setMessage('');
      }, 3000)
    } else {
      try {
        const itemsAr = basketItems.items.reduce((acc:sendItem[], e) => {
          const newEl = {id: Number(e.id), price: e.price, count: e.quantity};
          acc.push(newEl);
          return acc;
        }, []);
        
        const sendData = {
          owner: {
            phone: formData.phone,
            address: formData.address,
          },
          items: itemsAr
        };

        const response = await fetch(import.meta.env.VITE_ORDER_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(sendData),
        });
        if (response.ok) {
          dispatch(basketClear());
        }
        localStorage.removeItem('raDiplomaBasketItems');
      } catch(e) {
        console.log('Ошибка: ' + e);
      }
    }
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    setFormdata({...formData, [name]: val});
  }

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>, delId: number, delSize: string) => {
    dispatch(basketRemove({id: delId, size: delSize}));
  }

  return (
    <div className="mainArticle">
      <h1>Корзина</h1>
      {basketItems.items.length !== 0 ? 
        <>
          <div className="shopTableCont">
            <table className="shopTable">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Название</td>
                  <td>Размер</td>
                  <td>Кол-во</td>
                  <td>Стоимость</td>
                  <td>Сумма</td>
                  <td>Действия</td>
                </tr>
              </thead>
              <tbody>
                {basketItems.items.map((e, i) => 
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.title}</td>
                    <td>{e.size}</td>
                    <td>{e.quantity}</td>
                    <td>{e.price} руб.</td>
                    <td>{e.price * e.quantity} руб.</td>
                    <td><button className="delButton" type="button" onClick={event => deleteHandler(event, e.id, e.size)}>Удалить</button></td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5}>Общая стоимость</td>
                  <td>{basketItems.items.reduce((ac, e) => e.price * e.quantity + ac, 0)} руб.</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="shopOrderCont">
            <h2>Оформить заказ</h2>
            <form className="shopOrderBody" onSubmit={formSubmitHandler}>
                <label className="inputLabel" htmlFor="phone">Телефон</label>
                <input className="input orderPhoneInput" name="phone" type="text" id="phone" placeholder="Ваш телефон" onChange={inputChangeHandler} />
                <label className="inputLabel" htmlFor="address">Адрес доставки</label>
                <input className="input orderaddressInput" name="address" type="text" id="address" placeholder="Адрес доставки" onChange={inputChangeHandler} />
                <div className="orderCheckboxCont">
                  <input className="orderCheckbox" name="agree" type="checkbox" id="agree" onChange={checkBoxHandler} />
                  <label className="orderCheckboxLabel" htmlFor="agree">Согласен с правилами доставки</label>
                </div>
                <div className="messageBox">{message ? message : ' '}</div>
                <button className="orderSubmitBtn cardButton" name="phone" type="submit" disabled={btnDisabled}>Заказать</button>
            </form>
          </div>
        </>
      : <h3>В корзине пока нет товаров. Добавьте товары из <NavLink to='/RA_DIPLOMA-front/catalog/'>каталога</NavLink> </h3>
      }
    </div>
  )
}

export default Basket
