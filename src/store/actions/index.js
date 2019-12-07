let nextId = 0;

export const setZone = (zoneNum) => {
  return {
    type: 'SET_ZONE',
    id: nextId++,
    zoneNum
  };
};

export const setJove = (isJove) => {
  return {
    type: 'SET_JOVE',
    id: nextId++,
    isJove
  };
};

export const FARE_TYPES = {
  NORMAL: 0,
  REDUCED: 1,
  SPECIAL_REDUCED: 2
}

export const setReducedFare = (fareType) => {
  return {
    type: 'SET_REDUCED_FARE',
    id: nextId++,
    fareType
  };
};

export const setAtur = (isAtur) => {
  return {
    type: 'SET_ATUR',
    id: nextId++,
    isAtur
  };
};