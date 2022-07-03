import style from './TransactionHistory.module.scss';
import { TransactionHistoryItem } from 'components/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => (
  <table className={style.transactionHistory}>
    <thead className={style.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistoryItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);
