import React from 'react';
import MatchSimple from '../MatchSimple';
import { selectMatchesByLeague } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const LeagueList = ({match}) => {
  const selectedMatches = useSelector(state => selectMatchesByLeague(state, match.params.league))
  return(
    <div className="matchListContainer">
      <Helmet>
        <title>Xcote By League</title>
      </Helmet>
      {selectedMatches.map((match) => (
        <MatchSimple
          key={match.id}
          match={match}
        />
      ))}
    </div>
  );
};

export default LeagueList;
