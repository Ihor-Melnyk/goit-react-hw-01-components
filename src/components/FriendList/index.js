import { FriendListItem } from '../FriendListItem/index'
import  friends  from '../../friends.json'
// import css from './styles.css'

export const FriendList = () => (
  <ul className="friend-list">
    {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />))}
    </ul>
)