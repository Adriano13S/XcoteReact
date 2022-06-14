import React from 'react';
import { useSelector } from 'react-redux';
import liveLogo from '../../../assets/images/live.png';
import { getImageTeam } from '../../common/getImage';


const InfoContainer = ({el}) => {
  const navOpen = useSelector(state => state.navigator.value)
  const liveNavOpen = useSelector( state => state.liveNavigator.value)

  return(
    <>
      <div className="matchLivePath">
        <img id="live-img" src={liveLogo} alt="live-img" />
        <span>
          {el.event.path[1].name}{' '}-{' '}{el.event.group}
        </span>
      </div>
      <div className="matchLiveTeamsImg">
        <div className={navOpen && el.event.path[0].name === liveNavOpen ? "matchLiveHomeImg hideH" : "matchLiveHomeImg"}>
          <img alt={el.event.homeName} className="cardSimpleLogo" src={getImageTeam(el.event.sport, el.event.homeName)} />
        </div>
        <div className={navOpen && el.event.path[0].name === liveNavOpen ? "matchLiveAwayImg hideH" : "matchLiveAwayImg"}>
          <img alt={el.event.awayName} className="cardSimpleLogo" src={getImageTeam(el.event.sport, el.event.awayName)} />
        </div>
      </div>
      {el.liveData.matchClock
        ? (
          <div className="matchLiveBarTime">

            <p>
              {el.liveData.matchClock.period}
              {' '}
              <span>&apos;</span>
              {el.liveData.matchClock.minute}
            </p>
            <div className="bar" />
          </div>
        )
        : null}
      {el.liveData.score
        ? (
          <div className="matchLiveTeams">
            <div>
              <div>
                {el.event.homeName}
                {' '}
              </div>
              {el.liveData.score.home}
            </div>
            <div>
              <div>
                {el.event.awayName}
                {' '}
              </div>
              {el.liveData.score.away}
            </div>
          </div>
        )
        : null}
    </>    
  );
};

export default React.memo(InfoContainer);