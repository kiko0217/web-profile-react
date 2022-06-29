import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    document.title = 'Profile'
    return () => {};
  }, []);
  return (
    <section className='section'>
      <h1 className='section-title'>Profile</h1>
      <p className='section-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae expedita, fuga unde possimus cumque exercitationem aut nam alias eos commodi!</p>
    </section>
  );
}

export default Profile;
