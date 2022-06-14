import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectMatchesBySportName = createDraftSafeSelector(
  state => state.matches.value,
  (_, sportName) => sportName,
  (matches, sportName) => matches.filter(match => match.event.path[0].name === sportName)
);

export const selectMatchesByLiveAndSportName = createDraftSafeSelector(
  state => state.matches.value,
  (_, sportName) => sportName,
  (matches, sportName) => matches.filter(match => match.event.path[0].name === sportName && match.event.state === 'STARTED')
);


export const selectMatchesBySportId = createDraftSafeSelector(
  state => state.matches.value,
  (_, sportName) => sportName,
  (matches, sportId) => matches.filter(match => String(match.event.path[0].id) === sportId)
);

export const selectMatchesByLiveAndSportId = createDraftSafeSelector(
  state => state.matches.value,
  (_, sportName) => sportName,
  (matches, sportId) => matches.filter(match => String(match.event.path[0].id) === sportId && match.event.state === 'STARTED')
);


export const selectMatchesByTodayAndSportId = createDraftSafeSelector(
  state => state.matches.value,
  (_, sportName) => sportName,
  (matches, sportId) => matches.filter(match => String(match.event.path[0].id) === sportId && match.event.state !== 'STARTED' && new Date(match.event.start).getDay() === new Date(Date.now()).getDay())
);

// el.event.state === 'STARTED'&& String(el.event.path[0].id) === props.match.params.sport&& String(el.event.path[1].id) === props.match.params.country
export const selectMatchesBySportCountry = createDraftSafeSelector(
  state => state.matches.value,
  // eslint-disable-next-line no-unused-vars
  (_, sportId, arg) => sportId ,
  (_, arg, countryId) => countryId,
  (matches, sportId, countryId) => matches.filter(match => String(match.event.path[0].id) === sportId && String(match.event.path[1].id) === countryId)
);

export const selectMatchesByLiveSportCountry = createDraftSafeSelector(
  state => state.matches.value,
  // eslint-disable-next-line no-unused-vars
  (_, sportId, arg) => sportId ,
  (_, arg, countryId) => countryId,
  (matches, sportId, countryId) => matches.filter(match => String(match.event.path[0].id) === sportId && String(match.event.path[1].id) === countryId && match.event.state === 'STARTED')
  
);

export const selectMatchesByTodaySportCountry = createDraftSafeSelector(
  state => state.matches.value,
  // eslint-disable-next-line no-unused-vars
  (_, sportId, arg) => sportId ,
  (_, arg, countryId) => countryId,
  (matches, sportId, countryId) => matches.filter(match => String(match.event.path[0].id) === sportId && String(match.event.path[1].id) === countryId && match.event.state !== 'STARTED' && new Date(match.event.start).getDay() === new Date(Date.now()).getDay())
);

// state.matches.filter((el) => el && String(el.event.groupId) === props.match.params.league);
export const selectMatchesByLeague = createDraftSafeSelector(
  state => state.matches.value,
  (_, leagueId) => leagueId,
  (matches, leagueId) => matches.filter(match => String(match.event.groupId) === leagueId )
);

export const selectMatchesByLiveAndLeague = createDraftSafeSelector(
  state => state.matches.value,
  (_, leagueId) => leagueId,
  (matches, leagueId) => matches.filter(match => String(match.event.groupId) === leagueId && match.event.state === 'STARTED')
);

export const selectMatchesBySearchInput = createDraftSafeSelector(
  state => state.matches.value,
  (_, input) => input,
  (matches, input) => matches.filter(match => match.event.name.toUpperCase().includes(input.toUpperCase()))
);

export const selectMatchById = createDraftSafeSelector(
  state => state.matches.value,
  (_, matchId) => matchId,
  (matches, matchId) => matches.filter(match => String(match.event.id) === matchId)
);