import { arraySearchByValue, proxyToObject } from '@/utils/helpers';

import { none } from '@hookstate/core';

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
