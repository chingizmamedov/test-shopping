import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainLink.module.scss';

const MainLink = ({ img, name }) => {
  return (
    <div className={`col-4 ${styles.link_wrap}`}>
      <Link
        style={{
          transform: 'scale(1.2)',
          overflow: 'hidden',
        }}
        className="d-flex align-items-center justify-content-end"
        to="/man"
      >
        <img
          style={{
            width: '100%',
          }}
          src={img}
          alt=""
        />
        <div className={styles.link_name}>{name}</div>
      </Link>
    </div>
  );
};

export default MainLink;
