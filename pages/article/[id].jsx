import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// const API_NYCKEL = "pub_38240d6d8069b34a52954aac12b5d340fb55e";

export default function Article() {
  const [article, setArticle] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=pizza`)
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data.results;
        const article = allArticles.find((article) => article.article_id == id);

        setArticle(article);
      });
  }, [id]);

  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>
          <img src={article.image_url} alt="" />
        </>
      )}
    </div>
  );
}
