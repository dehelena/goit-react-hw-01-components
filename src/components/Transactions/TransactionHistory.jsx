import PropTypes from 'prop-types';
import { StyledTransactions } from './Transactions.styled';

export function TransactionHistory({ transactions }) {
  return (
    <StyledTransactions>
      <thead>
        <tr>
          <th className='tableHead'>Type</th>
          <th className='tableHead'>Amount</th>
          <th className='tableHead'>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className='tableBody'>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </StyledTransactions>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
