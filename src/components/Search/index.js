import React from 'react';

import MatchSimple from '../MatchSimple';
import { useSelector } from 'react-redux';
import { selectMatchesBySearchInput } from '../../redux/selectors';

const SearchResult = ({search}) => {

  const filterMatches = useSelector(state => selectMatchesBySearchInput(state, search))

  return (
      <div className="matchListContainer searchResult">
          {filterMatches.length > 0
            ? filterMatches.map((el) => (
              <MatchSimple key={el.event.id} match={el} adclass={'searchMatch'}/>
            ))
            : <div className="noSearchResult">Nu exista rezultate</div>}
      </div>
  );
};

export default SearchResult;
