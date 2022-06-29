import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    document.title = 'Blog'
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
      setNotFound(true)
      console.log(err);
    })
    return () => {
      console.log('stateEnd')
    }
  }, []);

  if(notFound){
    return (
      <>
        <h2><i>Blogs Not Found!!!</i></h2>
      </>
    )
  }
  return (
    <section className='section'>
      <h1 className='section-title'>Blog</h1>
      <p className='section-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, debitis?</p>
      {!loading ? (
        <div className='articles'>
          {
            articles.map(article => {
              return (
                <article className='article' key={article.id}>
                  <h3 className='article-title'><Link to={'/blog/'+article.id}>{article.title}</Link></h3>
                  <time className='article-time'>{new Date(article.publishedAt).toLocaleDateString()}</time>
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
