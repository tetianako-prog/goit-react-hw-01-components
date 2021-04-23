import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img
        src={avatar}
        alt={name + 'avatar'}
        width="48"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
