import { configureStore } from '@reduxjs/toolkit';
import { matchesReducer, sportsReducer, navigatorReducer,rightNavReducer,searchReducer, livePlusReducer, countryNavReducer, liveNavigatorReducer, homeMainReducer, mobileNavReducer} from './reducers';
import { fetchSports } from './actions';
import { openWS } from './middleware';

const store = configureStore({
  reducer: {
    matches: matchesReducer,
    sports: sportsReducer,
    navigator: navigatorReducer,
    livePlus: livePlusReducer,
    openCountry: countryNavReducer,
    liveNavigator: liveNavigatorReducer,
    homeMain: homeMainReducer,
    rightNav: rightNavReducer,
    searchInput: searchReducer,
    mobileNav: mobileNavReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openWS)
});
store.dispatch(fetchSports());

export default store;
