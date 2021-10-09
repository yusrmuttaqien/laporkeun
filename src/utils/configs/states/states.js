import { createState } from '@hookstate/core';
import { Persistence } from '@hookstate/persistence';

const scroll = {};

const toast = [];

const CU = {};

const persist = {};

const loadedFeatures = {
  isToast: false,
};

export const CUBase = multiReturn(CU);
export const toastBase = multiReturn(toast);
export const scrollBase = multiReturn(scroll);
export const persistBase = multiReturn(persist);
export const loadedFeaturesBase = multiReturn(loadedFeatures);

persistBase[0].attach(Persistence('persistance_laporkeun'));

function multiReturn(s) {
  return [createState(s), { ...s }];
}
