import transactions from '../transactions.json';
import PropTypes from 'prop-types';

export function TransactionHistory({ transactions }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        
      ))}
        </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
