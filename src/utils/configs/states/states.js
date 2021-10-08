import { createState } from '@hookstate/core';

const scroll = {};

const toast = [];

const loadedFeatures = {
  isToast: false,
};

export const toastBase = multiReturn(toast);
export const scrollBase = multiReturn(scroll);
export const loadedFeaturesBase = multiReturn(loadedFeatures);

function multiReturn(s) {
  return [createState(s), { ...s }];
}
