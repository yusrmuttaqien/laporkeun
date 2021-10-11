import Image from '@/components/Image';

import Email from '@/assets/mail.svg?component';
import Web from '@/assets/globe.svg?component';
import Github from '@/assets/github.svg?component';
import LinkedIn from '@/assets/linkedin.svg?component';

import styles from '../Home.module.scss';

export default function Credit() {
  const redirect = (e) => window.open(e, '_blank', 'noopener noreferrer');

  return (
    <div className={styles['home-page-info']}>
      <figure className={styles['info-creator']}>
        <Image
          customClass={styles['custom-image']}
          payload={{
            nonWebP:
              'https://firebasestorage.googleapis.com/v0/b/laporkeun-test.appspot.com/o/assets%2Fyusrdhm.jpg?alt=media&token=aa928de7-a04a-4263-b95a-8e293302e45f',
          }}
        />
        <div className={styles['creator']}>
          <p>creator of laporkeun</p>
          <h2>yusr.dhm</h2>
          <div className={styles['contact']}>
            <Email onClick={redirect.bind(this, 'mailto:dr.dhemm@gmail.com')} />
            <Web
              onClick={redirect.bind(this, 'https://yusrmuttaqien.web.app/')}
            />
            <LinkedIn
              onClick={redirect.bind(this, 'https://www.linkedin.com/in/ydhm/')}
            />
            <Github
              onClick={redirect.bind(this, 'https://github.com/DrDhemm')}
            />
          </div>
        </div>
      </figure>
      <p className={styles['info-date']}>2021 @yusr.dhm</p>
    </div>
  );
}
