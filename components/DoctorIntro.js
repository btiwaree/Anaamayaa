import PropTypes from 'prop-types';

import styles from './doctor-intro.module.css';

export const DoctorIntro = ({ name, title, degree, profileImage }) => {
  return (
    <div className={styles.wrapper}>
      <div>{profileImage}</div>
      <div className={styles.details}>
        <div>{name}</div>
        <div>{title}</div>
        <div className={styles.degree}>{degree}</div>
      </div>
    </div>
  );
};

DoctorIntro.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  degree: PropTypes.string,
  profileImage: PropTypes.element,
};
