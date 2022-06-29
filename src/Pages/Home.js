import React, {useEffect} from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Home'
    return () => {};
  }, []);
  return (
    <section className='section'>
      <h1 className='section-title'>Lorem ipsum dolor sit amet.</h1>
      <p className='section-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatibus, ullam facere officia quos expedita necessitatibus eveniet molestias exercitationem laboriosam eum consequuntur voluptatem provident dolores rem asperiores sed qui voluptatum.</p>
    </section>
  );
}

export default Home;
