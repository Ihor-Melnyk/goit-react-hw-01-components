import style from './FriendListItem.module.scss';
import PropTypes from 'prop-types';
import { type } from '@testing-library/user-event/dist/type';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={style.item}>
    <span className={`${style.status} ${style[type]}`}>{isOnline}</span>
    <span className={isOnline ? style.online : style.offline}>{isOnline}</span>
    <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
