import { useState, useEffect } from 'react';
import { client } from '../client';

export const useSanityQuery = (type) => {
  const [abouts, setAbouts] = useState([]);
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = `*[_type == "${type}"]`;

    client.fetch(query).then((data) => {
      switch (type) {
        case 'abouts':
          setAbouts(data);
          break;

        case 'works':
          setWorks(data);
          setFilterWork(data);
          break;

        case 'skills':
          setSkills(data);
          break;

        case 'experiences':
          setExperiences(data);
          break;

        case 'testimonials':
          setTestimonials(data);
          break;


        default:
          break;
      }
    });
  }, []);

  const triggerFilter = (item) => {
    if (item === 'All') {
      setFilterWork(works);
    } else {
      setFilterWork(works.filter((work) => work.tags.includes(item)));
    }
  }

  return {
    abouts,
    works,
    filterWork,
    triggerFilter,
    skills,
    experiences,
    testimonials,
  }
}