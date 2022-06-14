import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import SearchResult from '../Search';
import Router from '../../router';
import { useLocation } from 'react-router';
import searchImage from '../../assets/images/icon_search.png';
import { useDispatch, useSelector } from 'react-redux';
import { searchUpdate, mobileNavUpdate } from '../../redux/reducers';

const Main = () => {
  
  const [toggleSearch, setToggleSearch] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const formRef = useRef();
  const search = useSelector(state => state.searchInput.input);
  const mobileNav = useSelector(state => state.mobileNav.value);

  const defSearch = (e) => {
    if (e.target.value.length > 2) {
      dispatch(searchUpdate(e.target.value));
    }else{
      dispatch(searchUpdate(''));
    }
  };

  useEffect(()=>{
    formRef.current.querySelector('.searchContainer').value = '';
    dispatch(searchUpdate(''));
  },[location.pathname]);

  const ToggleMobileNav = (nav) => {
    if(mobileNav){
      dispatch(mobileNavUpdate(null));
    }else{
      dispatch(mobileNavUpdate(nav));
    }
  }

  return (
    <div className="centerMain">
      <div className="searchMain" >
        <div className="searchSpacer"></div>
        <div 
          className={mobileNav == "left" ? "leftHamburger leftOpenHamburger" : "leftHamburger"}
          onClick={() => ToggleMobileNav("left")}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="searchImg" onClick={() => setToggleSearch(!toggleSearch)}>
          <img alt="search-icon" src={searchImage}/>
        </div>
        <form className="searchForm" ref={formRef}>
          <input 
            type="text" 
            className={ toggleSearch? "searchContainer": "searchContainer hideH"} 
            onInput={(e) => defSearch(e)} 
            placeholder="Cauta . . . " 
          />
        </form>
        <div 
          className={mobileNav == "right" ? "rightHamburger rightOpenHamburger" : "rightHamburger"} 
          onClick={() => ToggleMobileNav("right")}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {search 
        ? <SearchResult search={search} />
        : <Router />
      }
    </div>
  )
};

export default Main;