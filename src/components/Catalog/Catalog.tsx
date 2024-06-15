import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchCatalogList } from "../../redux/slices/catalogSlice";
import CardItem from "../CardItem/CardItem";
import Categories from "../Categories/Categories";
import { setText } from "../../redux/slices/searchSlice";

const Catalog = () => {
  const dispatch = useAppDispatch();
  const catList = useAppSelector((state) => state.catList);
  const catCategories = useAppSelector((state) => state.catalogCategories);
  const searchText = useAppSelector((state) => state.searchText);

  useEffect(() => {
    dispatch(fetchCatalogList({categoryId: String(catCategories.current)}));
  }, [catCategories.current]);

  const moreBtnHandler = () => {
    const missing = catList.catalog.length;
    if (catList.more) {
      dispatch(fetchCatalogList({categoryId: String(catCategories.current), offset: String(missing)}));
    }
  }

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setText(value));
  }

  const searchSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <article className="mainArticle">
      {!(catList.catalog.length === 0 && !catList.loading) && 
        <div className="catalog">
          <h2>Каталог</h2>
          <form className="catSearchCont" onSubmit={searchSubmitHandler}>
            <input type="text" name="search" value={searchText.searchText} onChange={searchInputHandler} placeholder="Введите текст для поиска..." />
          </form>
          <Categories />
          {catList.loading && <div className="preloader"><span></span><span></span><span></span><span></span></div>}
          {catList.catalog && 
            <>
              <div className="cardsList">
                {catList.catalog.map((e, i) => 
                  <CardItem  
                    key={i}
                    id={e.id} 
                    category={e.category} 
                    title={e.title} 
                    price={e.price} 
                    images={e.images}
                  />
                )}
              </div>
              <div className="loadMoreCont">
                {catList.more && <button className="cardButton" type="button" onClick={moreBtnHandler}>Загрузить ещё</button>}
              </div>
            </>
          }
        </div>
      }
      
    </article>
  )
}

export default Catalog
