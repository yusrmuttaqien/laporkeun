import { createState } from '@hookstate/core';
import { Persistence } from '@hookstate/persistence';

const scroll = {};

const CU = {};

const persist = {};

const loadedFeatures = {
  isToast: false,
  isPrompt: false,
};

export const CUBase = multiReturn(CU);
export const scrollBase = multiReturn(scroll);
export const persistBase = multiReturn(persist);
export const loadedFeaturesBase = multiReturn(loadedFeatures);

persistBase[0].attach(Persistence('persistance_laporkeun'));

function multiReturn(s) {
  return [createState(s), { ...s }];
}
