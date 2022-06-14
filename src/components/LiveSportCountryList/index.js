import React from 'react';
import MatchSimple from '../MatchSimple';
import { useSelector } from 'react-redux';
import { selectMatchesByLiveSportCountry } from '../../redux/selectors';
import { Helmet } from 'react-helmet';

const LiveSportCountryList = ({ match }) => {
  const selectedMatches = useSelector(state => selectMatchesByLiveSportCountry(state, match.params.sport, match.params.country))
    return(
    <div className="matchListContainer">
      <Helmet>
        <title>{`Xcote Live by Sport and Country`}</title>
      </Helmet>
      {selectedMatches.map((match) => <MatchSimple key={match.event.id} match={match} />)}
    </div>
    );
  };
export default LiveSportCountryList;
