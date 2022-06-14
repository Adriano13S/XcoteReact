import {React, Suspense, lazy} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";


const HomeList = lazy(() => import('../components/HomeList'));
const LeagueList = lazy(() => import('../components/LeagueList'));
const MatchDetails = lazy(() => import('../components/MatchDetails'));
const LiveSportList = lazy(() => import('../components/LiveSportList'));
const LiveSportCountryList = lazy(() => import('../components/LiveSportCountryList'));
const TodaySportList = lazy(() => import('../components/TodaySportList'));
const TodaySportCountryList = lazy(() => import('../components/TodaySportCountryList'));

const Router = ()=>{
  return(
    <Switch>
      <Suspense fallback={<div className='loading'></div>}>
        <Route exact path='/' component={HomeList}/>
        <Route path='/league/:league' component={LeagueList} />
        <Route path='/match/:match' component={MatchDetails} />
        <Route path='/today/sport/:sport' component={TodaySportList}/>
        <Route path='/today/country/:sport/:country' component={TodaySportCountryList}/>
        <Route path='/live/sport/:sport' component={LiveSportList}/>
        <Route path='/live/country/:sport/:country' component={LiveSportCountryList}/>
      </Suspense>
      <Redirect from='/' to='/'/>
    </Switch>
  )
};

export default Router;