/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, lazy, Suspense } from 'react';
const CircleContainer = lazy(() => import('./circleContainer'));
const OddsContainer = lazy(() => import('./oddsContainer'));
import InfoContainer from './infoContainer';
import startInterval, { stopInterval } from './intervalFuction';
import { useSelector, useDispatch } from 'react-redux';
import { plusToggle } from '../../../redux/reducers';


const MainContainer = ({matches}) => {
  const targetIntervalSlide = useRef();
  const openPlusLive = useSelector( state => state.livePlus.value);
  const dispatch = useDispatch();
  const sportSelected = useSelector(state => state.liveNavigator.value)
  
  useEffect(() => {
    startInterval(targetIntervalSlide.current);
    return () => stopInterval();
  }, [targetIntervalSlide.current, sportSelected]);


  const showLivePlus = (e, id) => {
    const baseElement = e.currentTarget.parentNode.parentNode;
    if(getComputedStyle(baseElement).marginLeft === '0px'){
      if (!openPlusLive) {
        stopInterval();
        dispatch(plusToggle(id));
      } else {
        dispatch(plusToggle(''));
        startInterval(targetIntervalSlide.current);
      }
    }
  };


  return(
    <>
    <div className="liveDataContainer"
      ref={targetIntervalSlide}>
      {matches.map((el) => (
        <div key={el.event.id} className="liveDataMatch" id={el.event.path[0].name}>
          <InfoContainer el={el} />
          <div id={el.event.id} className={openPlusLive ? "matchLivePlus showPlusLive" : "matchLivePlus"}>
            {openPlusLive === el.event.id &&
            <Suspense fallback={<></>}>
              <>
                <OddsContainer el={el} />
                <CircleContainer el={el} />
              </>
            </Suspense>
            }
          </div>
          <div className="matchLiveShowOdds">
            <button className={openPlusLive ? "buttonMatchLiveShowOdds select-red": "buttonMatchLiveShowOdds"}
              type="button"
              onClick={(e) => showLivePlus(e, el.event.id)}>
              Cote Live
            </button>
          </div>
        </div>
      ))}
    </div>
    </> 
  );
};

export default MainContainer; 