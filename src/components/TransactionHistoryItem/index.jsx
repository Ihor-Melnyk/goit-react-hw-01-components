import style from './TransactionHistoryItem.module.scss';
import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => (
  <tr className={style.tr} key={id}>
    <td className={`${style.td} ${style.type}`}>{type}</td>
    <td className={style.td}>{amount}</td>
    <td className={style.td}>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
