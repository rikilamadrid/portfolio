import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { urlFor } from '../../client';
import  { AppWrap, MotionWrap } from '../../wrapper';
import { useSanityQuery } from '../../hooks/useSanityQuery';

const About = () => {
  const { abouts } = useSanityQuery('abouts');

  return (
    <>
      <h2 className="head-text">I Believe Good <span>Design and Development</span> <br />are keys to Good <span>Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  'about',
  "app__whitebg"
);
