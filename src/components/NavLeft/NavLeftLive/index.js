import React, { lazy, Suspense } from 'react';
import './index.css';
import ButtonsContainer from'./buttonsContainer'
const MainContainer = lazy(() => import('./mainContainer'));
import { useSelector } from 'react-redux';
import { selectMatchesByLiveAndSportName } from '../../../redux/selectors';

const NavLeftLive = () => {

  const navigationButtonOn = useSelector( state => state.liveNavigator.value);
  const selectedMatches = useSelector((state) => selectMatchesByLiveAndSportName(state, navigationButtonOn));
 
  return (
    <div className="navLeftLive">
      <div className="navLeftLiveCar" style={{height: selectedMatches.length == 0 ? '302.6px' : ''}}>
      <ButtonsContainer sports={['Fotbal', 'Tenis', 'Baschet', 'Esports']} />
      <Suspense fallback={<></>}>
        <MainContainer matches={selectedMatches} />
      </Suspense>
      </div>
    </div>
  );
};

export default NavLeftLive;
