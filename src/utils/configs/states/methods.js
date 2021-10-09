import { arraySearchByValue, proxyToObject } from '@/utils/helpers';

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

export const toastMethod = (s, og) => ({
  addToast: (toast) => {
    s.length + 1 > 20 && s[0].set(none);
    return s.merge([toast]);
  },
  deleteToast: (id) => {
    const index = arraySearchByValue(proxyToObject(s.value), id, 'id');
    return s[index].set(none);
  },
  clearToast: () => s.set(og),
  getToast: () => s.get(),
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
