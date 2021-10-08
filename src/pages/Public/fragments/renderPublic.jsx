import { AnimatePresence } from 'framer-motion';

import Card from '@/components/Card';
import Details from '@/components/Details';

import { report } from '../variables/fakeData';

import styles from '../Public.module.scss';

export default function renderPublic({ match }) {
  return (
    <>
      {report.map((r) => (
        <Card customClass={styles['custom-card']} payload={{ ...r }} />
      ))}
      <AnimatePresence>
        {match.params.name && (
          <Details name={match.params.name} back="/publik" />
        )}
      </AnimatePresence>
    </>
  );
}
