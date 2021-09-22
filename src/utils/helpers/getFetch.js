/**
 *
 * @param {String} url - URL of resource
 * @param {Object} options - Contain settings for useFetch and fetchAPI option (Merged)
 * @param {String} options.outputAs - Specify result output mode, op: [blob, blobURL]
 * @returns - Output of fetch with specified output mode
 */

export default async function getFetch(url, options) {
  const { outputAs, ...rest } = options;
  let result;

  try {
    result = await fetch(url, { ...rest });

    switch (outputAs) {
      case 'blob':
        result = await result.blob();
        break;
      case 'blobURL':
        result = await result.blob();
        result = await URL.createObjectURL(result);
        break;
      default:
        break;
    }
  } catch (err) {
    throw err;
  }

  return result;
}
