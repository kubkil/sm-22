import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import styles from './Nav.css';

const Nav = (props, context) => {
  return (
    <ul className={styles.nav}>
      <li className={styles.linkItem}><Link to="/home"><FormattedMessage id="home" /></Link></li>
      <li className={styles.linkItem}><Link to="/posts"><FormattedMessage id="posts" /></Link></li>
      <li className={styles.linkItem}><Link to="/about"><FormattedMessage id="about" /></Link></li>
    </ul>
  );
}

Nav.propTypes = {
};

export default Nav;
