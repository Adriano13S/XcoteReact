import React from 'react';
import { getImageBookie } from '../../common/getImage';

const OddsContainer = ({el}) => {
  
  return(
    <div  className="matchOddsLive">
      <table className="matchTableOodsLive">
        <tbody>
          <tr>
              <th>CASA PARIURI</th>
              {el.betOffers[0] && el.betOffers[0].outcomes.map((each) => (
              <th key={each.label}>{each.label}</th>
              ))}

          </tr>
          {el.betOffers.map((ods) => (
              <tr key={ods.provider}>
              <td><img src={getImageBookie(ods.provider)}/></td>
              {ods.outcomes.map((out) => (
                out.odds
                  ? (
                    <td key={el.event.id + out.label + ods.provider}>
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
    </div>
  );
};

export default OddsContainer;