import { requestTimeout } from '@/utils/helpers/requestTimeout';
import { loadedFeaturesStateF } from '@/utils/configs/states';

/**
 *
 * @param {Object} payload Data tobe inserted
 * @param {String} payload.title String for title
 * @param {Node | Element} payload.content Content to show in prompt
 * @param {Object} payload.buttonNext Payload for buttonNext
 * @param {String} payload.buttonNext.title Title for buttonNext
 * @param {Function} payload.buttonNext.action Action for buttonNext
 * @param {Object} payload.buttonBack Payload for buttonBack
 * @param {String} payload.buttonBack.title Title for buttonBack
 * @param {Function} payload.buttonBack.action Action for buttonBack
 * @param {String} payload.disabledID String of ID for disabled scroll
 * @returns Object for toast components
 */

export default async function callPrompt(payload) {
  if (!payload) {
    return;
  }

  await loadedFeaturesStateF().enableFeatures('isPrompt');

  window.prompt_ydhm
    ? window.prompt_ydhm(payload)
    : requestTimeout(() => window.prompt_ydhm(payload), 1000);
}
