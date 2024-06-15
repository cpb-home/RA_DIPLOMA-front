import Banner from "../../components/Banner/Banner"
import Hits from "../../components/Hits/Hits"
import Catalog from "../../components/Catalog/Catalog"
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { clearCatalog } from "../../redux/slices/catalogSlice";

const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearCatalog());
  }, [])

  return (
    <div className="main">
      <Banner />
      <Hits />
      <Catalog />
    </div>
  )
}

export default Main
