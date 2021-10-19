import { requestTimeout } from '@/utils/helpers/requestTimeout';
import { objectSelectFirstAvailable } from '@/utils/helpers/objectOperation';
import { loadedFeaturesStateF } from '@/utils/configs/states';

/**
 *
 * @param {Object} payload Data tobe inserted
 * @param {String} payload.title String for title
 * @param {String} payload.content String for content
 * @param {Object} bind Bind object from payload to title - content name
 * @returns Object for toast components
 */

export default async function callToast(payload, bind) {
  if (!payload) {
    return;
  }

  let data = payload;

  if (bind) {
    data = {
      title: objectSelectFirstAvailable(payload, bind.title),
      content: objectSelectFirstAvailable(payload, bind.content),
    };
  }

  await loadedFeaturesStateF().enableFeatures('isToast');

  window.toast_ydhm
    ? window.toast_ydhm(data)
    : requestTimeout(() => window.toast_ydhm(data), 1000);
}
