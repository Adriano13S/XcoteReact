import React, { useEffect } from 'react';
import './index.css';
import { getImageTeam, getImageBookie } from '../common/getImage';
import Circle from './circle';
import {Helmet} from "react-helmet";

const MatchDetails = ({ location }) => {
  const match = location.state;

  useEffect(() => {
    // Returns the cleanup function
    return ()=>{
        const metaTag = document.querySelector(`meta[name="${match.event.name}"]`);
        if (metaTag) {
            metaTag.remove();
        }
    };
  });

  return (
    <div className="matches-container">
      <Helmet>
        <meta name="description" content={match.event.name} />
        <title>{match.event.name}</title>
      </Helmet>
      <div className="match" mid={match.event.id}>
        <div className="matchPath">
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
        <div className="match-details">
          <div className="matchHome">
            <div className="matchHomeContent">
              <div className="containerCardLogo">
                <img alt={match.event.homeName} className="cardLogo" src={getImageTeam(match.event.sport, match.event.homeName)} />
              </div>
              <p>{match.event.homeName}</p>
            </div>
          </div>
          <div className="matchTime">
            {match.event.state === 'STARTED'
              ? (
                <div className="matchLive">
                  <div className="matchLiveClock">
                    <p>
                      {match.liveData.matchClock.period}
                      {' '}
                      {match.liveData.matchClock.minute}
                      {' '}
                      &apos;
                    </p>
                  </div>
                  <div className="matchLiveScore">
                    <p>{match.liveData.score.home}</p>
                    <p>:</p>
                    <p>{match.liveData.score.away}</p>
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
          <div className="matchAway">
            <div className="matchAwayContent">
              <div className="containerCardLogo">
                <img alt={match.event.awayName} className="cardLogo" src={getImageTeam(match.event.sport, match.event.awayName)} />
              </div>
              <p>{match.event.awayName}</p>
            </div>
          </div>
        </div>
        <table className="matchOods">
          <tbody>
            <tr>
                <th>CASA PARIURI</th>
                {match.betOffers[0] && match.betOffers[0].outcomes.map((each) => (
                <th key={each.label}>{each.label}</th>
                ))}
            </tr>
            {match.betOffers.map((ods) => (
                <tr key={ods.provider}>
                <td><img src={getImageBookie(ods.provider)}/>{ods.provider}</td>
                {ods.outcomes.map((out) => (
                  out.odds
                    ? (
                      <td key={out.odds + ods.provider}>
                        <p>{out.odds / 1000}</p>
                      </td>
                    )
                    :(
                      <td key={ods.provider}>
                        <p>{'-'}</p>
                      </td>
                    )
                ))}
                </tr>
            ))}
          </tbody>
        </table>
        <div className="matchDetailsStatsLive">
          {match.liveData
            ? match.liveData.statistics
              ? match.liveData.statistics.football
                                && (
                                <div className="matchDetailsStatsCircles">
                                  <Circle def="Cartonase galbene" 
                                          home={match.liveData.statistics.football.home.yellowCards} 
                                          away={match.liveData.statistics.football.away.yellowCards} 
                                          size="4"
                                          show_def={true}
                                  />
                                  <Circle def="Cartonase rosii" 
                                          home={match.liveData.statistics.football.home.redCards} 
                                          away={match.liveData.statistics.football.away.redCards} 
                                          size="4"
                                          show_def={true}
                                  />
                                  <Circle def="Cornere" 
                                          home={match.liveData.statistics.football.home.corners} 
                                          away={match.liveData.statistics.football.away.corners} 
                                          size="4"
                                          show_def={true}
                                  />
                                </div>
                                )
            // <div>{match.liveData.statistics.football.home.yellowCards} - {match.liveData.statistics.football.away.yellowCards}</div>
            // Object.entries(match.liveData.statistics.football)
            //     .map(([key, value])=>{return(<p>{key} - {Object.entries(value).map(([key2, value2])=>{return(<p>{key2}-{value2}</p>)})}</p>)})
              : null
            : null}
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
