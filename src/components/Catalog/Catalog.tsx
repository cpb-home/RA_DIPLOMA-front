import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchCatalogList } from "../../redux/slices/catalogSlice";
import CardItem from "../CardItem/CardItem";

const Catalog = () => {
  const dispatch = useAppDispatch();
  const catList = useAppSelector((state) => state.catList);

  useEffect(() => {
    dispatch(fetchCatalogList());
  }, []);
  
  return (
    <article className="mainArticle">
      {!(catList.catalog.length === 0 && !catList.loading) && 
        <div className="catalog">
          <h2>Каталог</h2>
          {catList.loading && <div className="preloader"><span></span><span></span><span></span><span></span></div>}
          {catList.catalog && 
            <>
              <div className="cardsList">
                {catList.catalog.map(e => 
                  <CardItem  
                    key={e.id}
                    id={e.id} 
                    category={e.category} 
                    title={e.title} 
                    price={e.price} 
                    images={e.images}
                  />
                )}
              </div>
              <div className="loadMoreCont">
                <button className="cardButton" type="button">Загрузить ещё</button>
              </div>
            </>
          }
        </div>
      }
      
    </article>
  )
}

export default Catalog
