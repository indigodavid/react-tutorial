import React from 'react';
import {
  Route, Link, Routes,
} from 'react-router-dom';
import SinglePage from '../components/SinglePage';

const About = () => {
  const currentPath = '/about';
  return (
    <div className="about__content">
      <ul>
        <li>
          <Link to={`${currentPath}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${currentPath}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":slug" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default About;
