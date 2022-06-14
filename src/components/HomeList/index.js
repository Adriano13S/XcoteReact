import React, { lazy, Suspense } from 'react';
import './index.css';
const TodaySportList = lazy(() => import('../TodaySportList'));
import { useDispatch, useSelector } from 'react-redux';
import { homeMainUpdate } from '../../redux/reducers';
import {Helmet} from "react-helmet";

const HomeList = () => {
  const dispatch = useDispatch();
  const selectedSport = useSelector(state => state.homeMain.value);
  const styleClass = selectedSport ? "homeMatcheSection openSection" : "homeMatcheSection";
  
  const changeSport = (e) => {
    dispatch(homeMainUpdate(e.currentTarget.getAttribute('vid')));
  };

  const closeSports = () => {
    dispatch(homeMainUpdate(null))
  };

  return (
    <div className={selectedSport ? "homeMatches openHome" : "homeMatches"}>
      <Helmet>
        <title>Xcote</title>
      </Helmet>
      <Suspense fallback={<></>}>
        {selectedSport && <TodaySportList sport={selectedSport}/>}
      </Suspense>
      <div className={selectedSport ? "homeSelects openSelects" : "homeSelects"} >
        <div id="homeFotbal" className={styleClass} value="fotbal" vid="1000093190" onClick={(e) => changeSport(e)}>
          <div />
        </div>
        <div id="homeTenis" className={styleClass} value="tenis" vid="1000093193" onClick={(e) => changeSport(e)}>
          <div />
        </div>
        <div id="homeBaschet" className={styleClass} value="baschet" vid="1000093204" onClick={(e) => changeSport(e)}>
          <div />
        </div>
        <div id="homeEsports" className={styleClass} value="esports" vid="2000077768" onClick={(e) => changeSport(e)}>
          <div />
        </div>
        <div id="homeExit" className={selectedSport ? "homeMatcheSection openSection" : "homeMatcheSection hideH"}
          onClick={() => closeSports()}>
          <div/>
        </div>
      </div>
    </div>
  );
};

export default HomeList;
