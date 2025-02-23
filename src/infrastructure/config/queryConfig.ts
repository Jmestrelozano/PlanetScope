export const PLANET_QUERY_PARAMS = {
  data: 'id,englishName,meanRadius,gravity,density,mass,massValue,massExponent,vol,volValue,volExponent,avgTemp,semimajorAxis',
  page: '1',
  filter: 'isPlanet,eq,true',
};

export const getPlanetQueryString = () =>
  `?${new URLSearchParams(PLANET_QUERY_PARAMS).toString()}`;