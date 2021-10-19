import { arraySearchByValue } from '@/utils/helpers/arrayOperation';
import { proxyToObject } from '@/utils/helpers/objectOperation';

import { none } from '@hookstate/core';

export const persistMethod = (s, og) => ({
  setPersist: (persist) => s.set({ init: persist }),
  getPersist: () => s.init.get(),
  resetPersist: () => s.set(og),
  isLogged: () => Object.keys(proxyToObject(s.value)).length > 0,
});

export const CUMethod = (s, og) => ({
  setCU: (cu) => s.set(cu),
  updateCU: (cu) => s.merge(cu),
  resetCU: () => s.set(og),
});

export const scrollMethod = (s) => ({
  setActive: (compObj) => s.merge(compObj),
  getActive: (comp) => s[comp].get(),
  remove: (comp) => s[comp].set(none),
});

export const loadedFeaturesMethod = (s) => ({
  getFeatures: (features) => s[features].get(),
  enableFeatures: (features) => s[features].set(true),
});
