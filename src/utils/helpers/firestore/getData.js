import { doc, getDoc, getFirestore } from 'firebase/firestore';

import { main } from '@/utils/configs';

export default async function getData(payload) {
  const { c, i } = payload;
  const db = getFirestore(main);
  let result;

  const docRef = doc(db, c, i);

  try {
    result = await getDoc(docRef);

    if (result.exists()) {
      result = { exist: true, data: await result.data() };
    } else {
      result = { exist: false };
    }
  } catch (err) {
    throw err;
  }

  return result;
}
