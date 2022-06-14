import React, { useState, useEffect } from 'react';
import './circle.css';
import yellowCard from '../../assets/images/yellowCard.png';
import redCard from '../../assets/images/redCard.png';
import cornerImg from '../../assets/images/corner.png';
import defaultImage from '../../assets/images/Logo2.png';

const Circle = ({ home, away, def, size, show_def }) => {

  const [imageSrc, getImageSrc] = useState(defaultImage);
  const [xgradient, setGradient] = useState();

  useEffect(() => {
    switch (def) {
      case 'Cartonase galbene':
        getImageSrc(yellowCard);
        break;
      case 'Cartonase rosii':
        getImageSrc(redCard);
        break;
      case 'Cornere':
        getImageSrc(cornerImg);
        break;
      default:
        getImageSrc('');
    }
  }, []);

  const procent = 100 / (home + away);
  const procentHome = home * procent;
  const procentAway = away * procent;

  useEffect(() => {
    if (procentHome > procentAway) {
      if (procentAway === 0) {
        setGradient(`linear-gradient(to right, blue ${procentHome}%, red ${procentAway}%`);
      } else {
        setGradient(`linear-gradient(to right, blue ${procentHome}%, red ${procentHome + 10}%`);
      }
    } else if (procentHome < procentAway) {
      if (procentHome === 0) {
        setGradient(`linear-gradient(to left, red ${procentAway}%, blue ${procentHome}%`);
      } else {
        setGradient(`linear-gradient(to left, red ${procentAway}%, blue ${procentAway + 10}%`);
      }
    } else {
      setGradient('linear-gradient(-90deg,red 35%, blue 60%)');
    }
  }, []);

  return (
    <div className="statsContainer">
      {show_def && <p>{def}</p>}
      <div className="circleContainer">
        <p>{home}</p>
        <div className="circular" style={{width:`${size*2}vh`, height:`${size*2}vh`}}>
          <div className="inner" style={{ background: `${xgradient}` }}>
            <div className="circle">
              <img alt="imageCircle" 
                src={imageSrc} 
                style={{width: `${size/1.2}vh`, height: `${size/1.2}vh`}}
              />
            </div>
          </div>
        </div>
        <p>{away}</p>
      </div>
    </div>
  );
};

export default Circle;
