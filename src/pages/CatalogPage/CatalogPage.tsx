import { useEffect } from "react";
import Catalog from "../../components/Catalog/Catalog"
import { useAppDispatch } from "../../hooks"
import { clearCatalog } from "../../redux/slices/catalogSlice";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearCatalog());
  }, [])

  return (
    <>
      <Catalog />
    </>
  )
}

export default CatalogPage
