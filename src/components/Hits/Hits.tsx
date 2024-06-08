import { useAppSelector } from "../../hooks";

const Hits = () => {
  const hits = useAppSelector((state) => state.hitsList);

  console.log(hits);

  return (
    <article className="mainArticle">
      <h2>Хиты продаж</h2>

    </article>
  )
}

export default Hits
