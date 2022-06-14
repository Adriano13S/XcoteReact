import React, {useRef, useEffect} from 'react';
import Circle from '../../MatchDetails/circle';

const CircleContainer = ({el}) => {
  const container = useRef();

  useEffect(() => {
    container.current.classList && setTimeout(()=>container.current.classList.remove('hideH'), 500);
  }, []);

  return(
    <div ref={container} className="matchStatsLive hideH">
      {el.liveData
        ? el.liveData.statistics
          ? el.liveData.statistics.football
              && (
              <div className="matchStatsCircles">
                <Circle def="Cartonase galbene"
                        home={el.liveData.statistics.football.home.yellowCards} 
                        away={el.liveData.statistics.football.away.yellowCards} 
                        size="3"
                />
                <Circle def="Cartonase rosii"
                        home={el.liveData.statistics.football.home.redCards} 
                        away={el.liveData.statistics.football.away.redCards} 
                        size="3"
                />
                <Circle def="Cornere" 
                        home={el.liveData.statistics.football.home.corners} 
                        away={el.liveData.statistics.football.away.corners} 
                        size="3"
                />
              </div>
              )
          : null
        : null}
    </div>  
  );
};

export default CircleContainer;
