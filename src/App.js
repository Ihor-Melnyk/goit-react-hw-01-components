import { Profile } from "components/Profile";
import { Statistics } from "components/Statistics";
import { FriendList } from "components/FriendList";
import { TransactionHistory } from "components/TransactionHistory";
import user from './user.json';
import data from "./data.json";






export const App = () => {
  return (
    <div>
      App
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      {/* <FriendList />
      <TransactionHistory/> */}
    </div>
  );
};