function TransactionItem({transaction}) {
  return (
    <div className="transaction-list">
    <div className={`item-${transaction.type} transaction-item`}>
      <div className='transaction-name transaction-content'>{`${transaction.name}`}</div>
      <div className="transaction-amt transaction-content">{transaction.type==="credit" ? `+${transaction.amount}` : `-${transaction.amount}`}</div>
      <div className='transaction-date transaction-content'>{new Date(transaction.date).toLocaleString('en-US').split(',')[0]}</div>
    </div>
    </div>
  )
}
export default TransactionItem