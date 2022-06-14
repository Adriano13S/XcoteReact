import React from 'react';
import MatchSimple from '../MatchSimple';
import { useSelector } from 'react-redux';
import { selectMatchesByTodayAndSportId } from '../../redux/selectors';
import { Helmet } from 'react-helmet';

const TodaySportList = (props) => {
  const sport = props.sport? props.sport: props.match.params.sport
  const selectedMatches = useSelector(state => selectMatchesByTodayAndSportId(state, sport));
  
  return(
  <div className={props.sport? "matchListContainer homeVariant": "matchListContainer"}>
    <Helmet>
      <title>{`Xcote Today by Sport`}</title>
    </Helmet>
    {selectedMatches.map((match) => <MatchSimple key={match.event.id} match={match} />)}
  </div>
  );
};


export default TodaySportList;
