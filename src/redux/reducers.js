
import { createSlice } from '@reduxjs/toolkit';
import { fetchSports } from './actions';



export const matchesSlice = createSlice({
  name: 'matches',
  initialState: {
    value : [],
  },
  reducers:{
    mUpdate: (state, action) => {
      state.value = action.payload
    },
  }
});

export const { mUpdate } = matchesSlice.actions;
export const matchesReducer = matchesSlice.reducer; 


export const sportsSlice = createSlice({
  name: 'sports',
  initialState: {
    value: [],
    status:'idle'
  },
  reducers: {
    sUpdate: (state, action) => {
      state.value = action.payload
    }
  },
  extraReducers: sports => {
    sports
    .addCase(fetchSports.pending, (state) => {
      state.staus = 'pending';
    })
    .addCase(fetchSports.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'idle';
    })
    .addCase(fetchSports.rejected, (state) => {
      state.status = 'rejected';
    });
  }
});

export const { sUpdate } = sportsSlice.actions;
export const sportsReducer = sportsSlice.reducer; 


export const navigatorSlice = createSlice({
  name: 'navigator',
  initialState: {
    value: false
  },
  reducers: {
    navToggle: state => {
      state.value = !state.value
    }
  }
});

export const { navToggle } = navigatorSlice.actions;
export const navigatorReducer = navigatorSlice.reducer; 


export const liveNavigatorSlice = createSlice({
  name: 'liveNavigator',
  initialState: {
    value: 'Fotbal'
  },
  reducers:{
    changeLiveNav: (state, action) =>{
      state.value = action.payload
    }
  }
});

export const liveNavigatorReducer = liveNavigatorSlice.reducer;
export const { changeLiveNav } = liveNavigatorSlice.actions;

export const livePlusSlice = createSlice({
  name: 'livePlus',
  initialState: {
    value: ''
  },
  reducers:{
    plusToggle: (state, action) =>{
      state.value = action.payload
    }
  }
});

export const { plusToggle } = livePlusSlice.actions;
export const livePlusReducer = livePlusSlice.reducer; 




export const countryNavSlice = createSlice({
  name: 'navCountry',
  initialState: {
    value:''
  },
  reducers : {
    navCountryUpdate: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { navCountryUpdate } = countryNavSlice.actions;
export const countryNavReducer = countryNavSlice.reducer;

export const homeMainSlice = createSlice({
  name: 'homeMain',
  initialState: {
    value: null
  },
  reducers : {
    homeMainUpdate: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { homeMainUpdate} = homeMainSlice.actions;
export const homeMainReducer = homeMainSlice.reducer;


export const rightNavSlice = createSlice({
  name: 'rightNav',
  initialState: {
    sport: null
  },
  reducers : {
    rightNavUpdate: (state, action) => {
      state.sport = action.payload;
    }
  }
});

export const { rightNavUpdate} = rightNavSlice.actions;
export const rightNavReducer = rightNavSlice.reducer;


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    input: null
  },
  reducers : {
    searchUpdate: (state, action) => {
      state.input = action.payload;
    }
  }
});

export const { searchUpdate} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;


export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState: {
    value: null
  },
  reducers : {
    mobileNavUpdate: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { mobileNavUpdate} = mobileNavSlice.actions;
export const mobileNavReducer = mobileNavSlice.reducer;



// export const filterMatchesSlice = createSlice({
//   name: 'filterBy',
//   initialState: {
//     value: []
//   },
//   reducers: {
//     sport: (state, action) =>{
//       const newValue = mapFilterLiveSport(action.arrayToMap);
//       state.value = newValue;
//     }
//   }
// });

// export const { sport } = filterMatchesSlice.actions;
// export const filterMatchesReducer = filterMatchesSlice.reducer;

// function reducerMatches(state = [], action) {
//   switch (action.type) {
//     case 'updateMatches':
//       return [...action.payload];
//     default:
//       return state;
//   }
// }

// function reducerNavigator(state = {isOpen:false}, action) {
//   switch (action.type) {
//     case 'toggleNavigator':
//       return {...state, isOpen: action.payload};
//     default:
//       return state;
//   }
// }

// function reducerSports(state = [], action) {
//   switch (action.type) {
//     case 'updateSports':
//       return [...action.payload];
//     default:
//       return state;
//   }
// }


// function reducerOpenPlusLive(state = '', action) {
//   switch (action.type) {
//     case 'setOpenPlusLive':
//       return action.payload
//     default:
//       return state
//   }
// }

// function reducerIntervalStatus(state = 'on', action) {
//   switch (action.type) {
//     case 'setIntervalStatus':
//       return action.payload
//     default:
//       return state
//   }
// }


// const reducers = combineReducers({
//   matches: reducerMatches,
//   sports: reducerSports,
//   navigator: reducerNavigator,
//   openPlusLive: reducerOpenPlusLive,
//   intervalStatus: reducerIntervalStatus,
// });

// export { reducers };
