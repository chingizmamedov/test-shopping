import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainLink.module.scss';

const MainLink = ({ img, name, to, col }) => {
  return (
    <div className={`${col} ${styles.link_wrap}`}>
      <Link
        style={{
          transform: 'scale(1.2)',
          overflow: 'hidden',
          width: '100%',
        }}
        className="d-flex align-items-center justify-content-end"
        to={`/man${to}`}
      >
        <img
          style={{
            width: '100%',
          }}
          src={img}
          alt=""
        />
      </Link>
      <div className={styles.link_name}>{name}</div>
    </div>
  );
};

export default MainLink;
