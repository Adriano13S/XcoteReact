import React from 'react';
import { Link } from 'react-router-dom';

const League = ({country, sport}) => {
  return(
    <div className="nav-league-container">
      <Link to={`/today/country/${sport.id}/${country.id}`}>
        <div className="nav-league on">Meciurile de Astazi</div>
      </Link>
      <Link to={`/live/country/${sport.id}/${country.id}`}>
        <div className="nav-league on">Meciurile Live</div>
      </Link>
      {country.groups
      && 
      country.groups.map((league) => 
        <Link key={league.id} to={`/league/${league.id}`}>
          <div className="nav-league on">{league.name}</div>
        </Link>
      )}
    </div>
  )
};

export default League;
