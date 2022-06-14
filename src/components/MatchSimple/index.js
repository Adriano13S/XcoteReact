import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { getImageTeam } from '../common/getImage';


const MatchSimple = ({ match, adclass }) => {
  
  return (
    <Link to={{ pathname: `/match/${match.event.id}`, state: match }}>
      <div className={adclass ? `matchSimple ${adclass}` : 'matchSimple'}>
        <div className="matchSimplePath">
          <span>&middot;</span>
          {match.event.path.map((el) => (
            <span key={el.id}>
              {' '}
              { el.name }
              {' '}
              &middot;
              {' '}
            </span>
          ))}
        </div>
        <div className="matchSimpleDetails">
          <div className={match.event.state === 'STARTED' ? 'matchSimpleHome homeRed' : 'matchSimpleHome homeGreen'}>
            <div className="matchSimpleHomeContent">
              <div className="matchHomeName">{match.event.homeName}</div>
              <div className="containerSimpleCardLogo">
                <img alt={match.event.homeName} className="cardSimpleLogo" src={getImageTeam(match.event.sport, match.event.homeName)} />
              </div>
            </div>
          </div>
          <div className="matchSimpleTime">
            {match.event.state === 'STARTED'
              ? (
                <div className="matchSimpleLive">
                  <p>
                    &apos;
                    {match.liveData.matchClock ? match.liveData.matchClock.minute : null}
                  </p>
                  <div className="matchSimpleLiveScore">
                    <div className="matchSimpleLiveScoreHome">{match.liveData.score && match.liveData.score.home }</div>
                    <div>:</div>
                    <div className="matchSimpleLiveScoreAway">{match.liveData.score && match.liveData.score.away }</div>
                  </div>
                </div>
              )
              : (
                <p>
                  {new Date(match.event.start).toLocaleDateString(['RO'], {
                    month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',
                  })}
                </p>
              )}
          </div>
          <div className={match.event.state === 'STARTED' ? 'matchSimpleAway awayRed' : 'matchSimpleAway awayGreen'}>
            <div className="matchSimpleAwayContent">
              <div className="containerSimpleCardLogo">
                <img alt={match.event.awayName} className="cardSimpleLogo" src={getImageTeam(match.event.sport, match.event.awayName)} />
              </div>
              <div className="matchAwayName">{match.event.awayName}</div>
            </div>
          </div>
          {/* <span className="favoriteStar">&#x2605;</span> */}
        </div>
      </div>
    </Link>
  );
};

export default MatchSimple;