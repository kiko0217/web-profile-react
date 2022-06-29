import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
    .then(res => {
      if(res.ok){
        return res.json()
      }
      throw new Error('Articels Not Found!!!')
    })
    .then(data => {
      setLoading(false)
      setArticles(data)
    })
    .catch(err => {
      setLoading(false)
      console.log(err);
    })
    return () => {
      console.log('stateEnd')
    }
  }, []);

   return (
    <section>
      <h1>Blog</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, debitis?</p>
      {!loading ? (
        <div>
          {
            articles.map(article => {
              return (
                <article key={article.id}>
                  <h2><Link to={'/blog/'+article.id}>{article.title}</Link></h2>
                  <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                </article>
              )
            })
          }
        </div>
      ): (
        <h3><i>Loading get articles ...</i></h3>
      )}
    </section>
  );
}

export default Blog;
