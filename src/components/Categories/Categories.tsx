import { useAppDispatch, useAppSelector } from "../../hooks";
import React, { useEffect } from "react";
import { fetchCatCategories, setCurrentCategory } from "../../redux/slices/catalogCategoriesSlice";
import { clearCatalog } from "../../redux/slices/catalogSlice";

const Categories = () => {
  const catCategories = useAppSelector((state) => state.catalogCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCatCategories());
  }, []);

  const catChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target.value;
    dispatch(setCurrentCategory(Number(el)));
    dispatch(clearCatalog());
  }

  return (
    <div className="catCategories">
      <label className="catCategoryLabel">Все<input type="radio" name="catRadio" value='0' checked={catCategories.current===0?true:false} onChange={catChangeHandle} /></label>
      {catCategories.categories.map(e => <label key={e.id} className="catCategoryLabel">{e.title}<input type="radio" name="catRadio" value={e.id} onChange={catChangeHandle} checked={catCategories.current==e.id?true:false} /></label> )}
    </div>
  )
}

export default Categories
