import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const params = useParams()
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Article not found')
    })
    .then(data => {
      setLoading(false)
      setArticle(data)
    })
    .catch(err => {
      setLoading(false)
      setNotFound(true)
      console.log(err);
    })
    return () => {};
  }, [params]);
  if(notFound){
    return (
      <h1><i>Artikel tidak ditemukan</i></h1>
    )
  }
  return (
    <section>
      { loading ?(
        <h3><i>Loading get article ...</i></h3>
      ):(
          <>
            <h1>{article.title}</h1>
            <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
            <img src={article.imageUrl} alt={article.title} />
            <p>{article.summary}</p>
            <p>Source: <a href={article.url} target="_blank" rel='noreferrer'>{article.newsSite}</a></p>
          </>
      )}

    </section>
  );
}

export default BlogDetail;
