import { useState } from '@hookstate/core';

import { scrollMethod, loadedFeaturesMethod, toastMethod } from './methods';
import { scrollBase, loadedFeaturesBase, toastBase } from './states';

export const scrollStateF = () => scrollMethod(scrollBase[0]);
export const loadedFeaturesStateF = () =>
  loadedFeaturesMethod(loadedFeaturesBase[0]);

export const toastStateC = () =>
  toastMethod(useState(toastBase[0]), toastBase[1]);
export const loadedFeaturesStateC = () =>
  loadedFeaturesMethod(useState(loadedFeaturesBase[0]));
