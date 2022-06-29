import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact'
    return () => {};
  }, []);
  return (
    <section className='section'>
      <h1 className='section-title'>Contact Us</h1>
      <p className='section-description'>Kamu dapat menghubungin kami:</p>
      <ul>
        <li>WA: 08882039033</li>
        <li>Email: anziskita@gmail.com</li>
      </ul>
      <p className='section-description'>Atau bisa sosial media kami:</p>
      <ul>
        <li><a href="http://facebook.com">Facebook</a></li>
        <li><a href="http://twitter.com">Twitter</a></li>
      </ul>
    </section>
  );
}

export default Contact;
