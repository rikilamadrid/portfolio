import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/rikilamadrid/" target='_blank' rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href="https://www.instagram.com/rikilamadrid/" target='_blank' rel="noreferrer" >
      <BsInstagram />
    </a>
    <a href="https://github.com/rikilamadrid" target='_blank' rel="noreferrer" >
      <BsGithub />
    </a>
  </div>
);

export default SocialMedia;
