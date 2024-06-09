import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchHitsList } from "../../redux/slices/hitsSlice";
import CardItem from "../CardItem/CardItem";

const Hits = () => {
  const hitsList = useAppSelector((state) => state.hitsList);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchHitsList());
  }, []);

  return (
    <article className="mainArticle">
      {hitsList.hits.length !== 0 && 
        <div className="top-sales">
          <h2>Хиты продаж</h2>
          {hitsList.loading && <div className="preloader"><span>Loading...</span></div>}
          {hitsList.hits && 
            <div className="cardsList">
              {hitsList.hits.map(e => 
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
          }
        </div>
      }
      
    </article>
  )
}

export default Hits


/*
return (
    <article className="mainArticle top-sales">
      <h2>Хиты продаж</h2>
      {hitsList.loading && <div className="preloader"><span>Loading...</span></div>}
      {hitsList.hits && 
        <div className="cardsList">
          {hitsList.hits.map(e => 
            <CardItem 
              key={e.id} 
              id={e.id} 
              category={e.category} 
              title={e.title} 
              price={e.price} 
              images={e.images}
            />)}
        </div>
      }
    </article>
  )
*/