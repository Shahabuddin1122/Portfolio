// CardComponent.js
import React from 'react';
import styles from './first_pge.module.css';
import { Link } from 'react-router-dom';

const First_page = () => {
  return (
    <div className={styles.card}>
      <div className={styles.lines}></div>
      <div className={styles.imgbox}>
        <img src="1.jpg" alt="Profile" />
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h2>
            Shahabuddin Akhon <br /> <span>Engineering Student</span>
          </h2>
          <div className={styles.data}>
            <h3>
              0 <br />
              <span>posts</span>
            </h3>
            <h3>
              0k <br />
              <span>Followers</span>
            </h3>
            <h3>
              0k <br />
              <span>Following</span>
            </h3>
          </div>
          <div className={styles.actionBtn}>
            <button>
              <Link to={`/book`}>Portfolio</Link>
            </button>
            <button>
              <a href="https://m.me/shahabuddin.hridoy.98">Message</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First_page;
