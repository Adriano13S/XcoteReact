import React from 'react';
import MatchSimple from '../MatchSimple';
import { useSelector } from 'react-redux';
import { selectMatchesByTodaySportCountry } from '../../redux/selectors';
import { Helmet } from 'react-helmet';

const TodaySportCountryList = ({ match }) => {

  const filterMatches = useSelector(state => selectMatchesByTodaySportCountry(state, match.params.sport, match.params.country))
  return(
    <div className="matchListContainer">
      <Helmet>
        <title>{`Xcote Today by Sport and Country`}</title>
      </Helmet>
      {filterMatches.map((match) => <MatchSimple key={match.event.id} match={match} />)}
    </div>
  );
};

export default TodaySportCountryList;
