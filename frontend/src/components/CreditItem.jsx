import functions from './functions'
import {BiEditAlt} from 'react-icons/Bi'
import {MdDelete} from 'react-icons/Md'

function CreditItem({transaction}) {


  return (
    <div className="transaction-list">
    <div className={`item-${transaction.type} transaction-item`}>
      <div className='transaction-name transaction-content'>{`${transaction.name}`}</div>
      <div className="transaction-amt transaction-content">{transaction.type==="credit" ? `+${transaction.amount}` : `-${transaction.amount}`}</div>
      <div className='transaction-date transaction-content'>{new Date(transaction.date).toLocaleString('en-US').split(',')[0]}</div>
      <div className='editSymbol remove'><BiEditAlt  className='text-sky-500 text-xl'/></div>
      <div className='deleteSymbol remove'><MdDelete  className='text-sky-500 text-xl'/></div>
    </div>
    </div>
  )
}
export default CreditItem
