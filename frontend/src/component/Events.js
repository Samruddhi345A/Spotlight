import React, { useState, useEffect, useContext } from 'react';
import '../css/Ev.css';
import eveContext from '../context/eveContext';

// =========================
// Slide
// =========================
const Slide = ({ slide, current, handleSlideClick }) => {
  const { src, headline, button, index } = slide;
  const slideRef = React.createRef();

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = (event) => {
    slideRef.current.style.setProperty('--x', 0);
    slideRef.current.style.setProperty('--y', 0);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  let classNames = 'slide';
  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button className="slide__action btn">{button}</button>
      </article>
    </li>
  );
};

// =========================
// Slider control
// =========================
const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

// =========================
// Events
// =========================
const Events = () => {
  const Eve = useContext(eveContext);
  const { eves,getAllEves } = Eve;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllEves();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }
    fetchData();
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent((previous < 0) ? eves.length - 1 : previous);
    setDirection('prev');
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent((next === eves.length) ? 0 : next);
    setDirection('next');
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setDirection(current < index ? 'next' : 'prev');
      setCurrent(index);
    }
  };

  const heading = 'Event Slider';
  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / eves.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className={`slider__wrapper ${direction}`} style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">
          {heading}
        </h3>

        {eves.map((eve, index) => (
          <Slide
            key={eve._id}
            slide={{
              index,
              src: `data:image/jpeg;base64,${eve.imageData}`,
              headline: eve.orgName,
              button: 'View Event',
            }}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="slider__controls">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Events;