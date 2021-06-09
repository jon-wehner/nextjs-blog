import React from 'react';
import Proptypes from 'prop-types';
import styles from './layout.module.css';
/**
 * Contains all of the children components
 * @param {children} children of the component
 * @return {children} the children
 */
export default function Layout({children}) {
  return <div className={styles.container}>{children}</div>;
}

Layout.propTypes = {
  children: Proptypes.element,
};
