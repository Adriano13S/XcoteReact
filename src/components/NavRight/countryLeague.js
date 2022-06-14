import React, { useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { getImageCountry } from '../common/getImage';
const League = lazy(() => import('./navLeague'));
import { useSelector, useDispatch } from 'react-redux';
import { navCountryUpdate } from '../../redux/reducers';

const CountryLeagueCont = ({sport}) => {
  const dispatch = useDispatch();
  const openCountry = useSelector( state => state.openCountry.value)
  const countryRef = useRef();

  const showLeague = (e, target, id) => {
    e.stopPropagation();
    if (openCountry === id) {
      dispatch(navCountryUpdate(''));
    } else {
      target.classList.remove('on');
      setTimeout(() => {
        dispatch(navCountryUpdate(id));
      }, 175);
    }
  };

  return(
    <div className="nav-country-container" ref={countryRef}>
      <Link to={`/today/sport/${sport.id}`}><div className="nav-country on">Meciurile de Astazi</div></Link>
      <Link to={`/live/sport/${sport.id}`}><div className="nav-country on">Meciurile Live</div></Link>
      {sport.groups.map((country) => (
        <div key={country.id} 
          id={`e${country.id}`} 
          className={openCountry === country.id ? "nav-country" :  "nav-country on"}
          onClick={(e) => showLeague(e, e.currentTarget, country.id)}
        >
          <img alt={country.id} className="navLogo" src={getImageCountry(country.name)} />
          <p>{country.name}</p>
          <Suspense fallback={<></>}>
            {openCountry === country.id && <League sport={sport} country={country}/>}
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default CountryLeagueCont;
