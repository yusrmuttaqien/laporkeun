/**
 *
 * @param {String} type - Type of WebP to checked, op: [lossy, lossless, alpha, animation]
 * @returns
 */

const detectWebP = (type) => {
  const feature = type || 'alpha';

  let kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha:
      'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation:
      'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
  };

  return new Promise((resolve) => {
    let img = new Image();
    img.src = 'data:image/webp;base64,'.concat(kTestImages[feature]);
    img.onload = () => {
      let result = img.width > 0 && img.height > 0;
      result ? resolve(true) : resolve(false);
    };
    img.onerror = () => {
      resolve(false);
    };
  });
};

export default detectWebP;
