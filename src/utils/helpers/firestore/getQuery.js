import {
  collection,
  query,
  where,
  getFirestore,
  getDocs,
} from 'firebase/firestore';

import { main } from '@/utils/configs/firebase';

export default async function getQuery(payload) {
  const { c, whereCase } = payload;
  const db = getFirestore(main);
  let result, whereClause, queryDef;

  queryDef = collection(db, c);
  whereClause = constructWhere(whereCase);
  queryDef = query(queryDef, ...whereClause);

  try {
    queryDef = await getDocs(queryDef);

    queryDef.forEach((doc) => {
      result = { exist: true, data: doc.data() };
    });
  } catch (err) {
    throw err;
  }

  if (result) {
    return result;
  } else {
    return { exist: false };
  }
}

function constructWhere(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = where(arr[i][0], arr[i][1], arr[i][2]);
  }

  return result;
}
