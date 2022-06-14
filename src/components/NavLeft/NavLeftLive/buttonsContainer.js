import React, { useCallback } from 'react';
import { changeLiveNav, plusToggle } from '../../../redux/reducers';
import { useSelector, useDispatch } from 'react-redux';

const ButtonsContainer = ({sports}) => {

  const buttonOn = useSelector(state => state.liveNavigator.value);
  const dispatch = useDispatch();
  
  const buttonClick = useCallback( value => {
    dispatch(changeLiveNav(value));
    dispatch(plusToggle(''))
  }, [buttonOn]);

  return(
    <div className="liveButtons">
      {sports
        .map((key) => 
          <button type="button" className={buttonOn === key? 'select-red':''} value={key} key={key} onClick={(e) => buttonClick(e.currentTarget.value)}>
            {key}
          </button>
        )
      }
  </div>
  );
};

export default ButtonsContainer;
