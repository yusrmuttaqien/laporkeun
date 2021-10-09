import { useState } from '@hookstate/core';

import {
  scrollMethod,
  loadedFeaturesMethod,
  toastMethod,
  CUMethod,
  persistMethod,
} from './methods';
import {
  scrollBase,
  loadedFeaturesBase,
  toastBase,
  CUBase,
  persistBase,
} from './states';

export const CUStateF = () => CUMethod(CUBase[0], CUBase[1]);
export const scrollStateF = () => scrollMethod(scrollBase[0]);
export const persistStateF = () =>
  persistMethod(persistBase[0], persistBase[1]);
export const loadedFeaturesStateF = () =>
  loadedFeaturesMethod(loadedFeaturesBase[0]);

export const CUStateC = () => CUMethod(useState(CUBase[0]), CUBase[1]);
export const persistStateC = () =>
  persistMethod(useState(persistBase[0]), persistBase[1]);
export const toastStateC = () =>
  toastMethod(useState(toastBase[0]), toastBase[1]);
export const loadedFeaturesStateC = () =>
  loadedFeaturesMethod(useState(loadedFeaturesBase[0]));
