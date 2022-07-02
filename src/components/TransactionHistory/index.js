import transactions from '../../transactions.json';
import PropTypes from 'prop-types'

export const TransactionHistory = () => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(({ id, type, amount, currency }) =>
        <tr key = {id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>)}
    </tbody>
  </table>
)

// TransactionHistory.propTypes = {
//   id: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
// }