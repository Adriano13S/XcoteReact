import React from 'react';
import MatchSimple from '../MatchSimple';
import { useSelector } from 'react-redux';
import { selectMatchesByLiveAndSportId } from '../../redux/selectors';
import { Helmet } from 'react-helmet';

const LiveSportList = ({match}) => {
  const selectedMatches = useSelector(state => selectMatchesByLiveAndSportId(state, match.params.sport))
  return (
  <div className="matchListContainer">
    <Helmet>
        <title>{`Xcote Live by Sport`}</title>
      </Helmet>
    {selectedMatches.map((match) => <MatchSimple key={match.event.id} match={match} />)}
  </div>
  );
};
export default LiveSportList;
