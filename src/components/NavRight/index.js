import React, { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rightNavUpdate } from '../../redux/reducers';
import './index.css';
const CountryLeagueCont = lazy(() => import('./countryLeague'));

const NavRight = () => {
  const dispatch = useDispatch()
  const navRightSport = useSelector(state => state.rightNav.sport)
  const sports = useSelector(state => state.sports.value)
  const mobileNav = useSelector(state => state.mobileNav.value);
  const clickTop = (target, id) => {
    if (navRightSport === id) {
      dispatch(rightNavUpdate(''));
    } else {
      target.classList.remove('on');
      setTimeout(() => {
        dispatch(rightNavUpdate(id));
        target.parentNode.scrollTop = target.offsetTop;
      }, 175); // timeout waiting for hover scale to come back to normal
    }
  };

  return (
    <div className={mobileNav === 'right' ? "navRight-container navMobileRight" : "navRight-container"}>
      {sports.map((sport) => (
        <div className={navRightSport === sport.id? "nav-sports": "nav-sports on"} key={sport.id} id={`e${sport.id}`} onClick={(e) => clickTop(e.currentTarget, sport.id)}>
          {sport.name}
          <Suspense fallback={<></>}>
            {navRightSport === sport.id && <CountryLeagueCont sport={sport} />}
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default NavRight;
