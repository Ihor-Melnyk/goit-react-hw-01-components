import { FriendListItem } from '../FriendListItem/index';
import style from './FriendList.module.scss';

export const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);
