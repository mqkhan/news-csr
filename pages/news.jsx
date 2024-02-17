import { useEffect, useState } from "react";
import Link from "next/link";
import { useNewsContext } from "@/newsContext";

// const API_NYCKEL = "pub_38240d6d8069b34a52954aac12b5d340fb55e";
//newsdata.io/api/1/news?apikey=$pub_38240d6d8069b34a52954aac12b5d340fb55e&q=pizza

export default function News() {
  const { state, setArticles } = useNewsContext();

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=pizza`)
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <section className="bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {state.articles.map((article) => (
          <li className="list-none" key={article.id}>
            <div>
              <Link href={`/article/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <img src={article.image_url} alt="" />
            </div>
          </li>
        ))}
      </div>
    </section>
  );
}
