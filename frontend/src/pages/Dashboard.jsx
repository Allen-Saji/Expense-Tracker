import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import TransactionItem from '../components/TransactionItem'
import {getTransactions} from '../features/transactions/transactionSlice'
import {FaRupeeSign} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Dashboard() {
  const { transactions } = useSelector((state) => state.transactions)

  const dispatch = useDispatch()

  // NOTE: only need one useEffect here

  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch])

  if (!transactions) {
    return <Spinner />
  }

  let sum_credit = 0;
  let sum_debit = 0;

   transactions.forEach(element => {
    element.type === 'credit' ? sum_credit+=element.amount : sum_debit += element.amount;
  });


  return (
    <div className='flex'>
    <div className="glass p-10 m-10 outline-dashed  border-sky-500">
    <h4 className=" flex justify-center text-3xl mb-7">Transactions</h4>
    {transactions.map((transaction) => (
      <TransactionItem key={transaction._id} transaction={transaction} />
    ))} 
    </div>
    <div className="right-dash flex flex-col">
      <div className="display-amt">
      <div className="amt-box flex flex-col">
        <div className="amt-label">
          <p>total credits this month</p>
        </div>
        <div className="amt-content flex m-auto text-3xl">
        <FaRupeeSign />{sum_credit}
        </div>
        </div>
        <div className="amt-box flex flex-col ">
        <div className="amt-label">
          <p>total debits this month</p>
        </div>
        <div className="amt-content flex m-auto text-3xl">
        <FaRupeeSign />{sum_debit}
        </div>
        </div>
      </div>
      <div className="manage-btns flex">
        <Link to={'/credit'}><button className='bg-transparent border border-sky-500 font-semibold hover:text-pink-600 hover:border-pink-700 py-4 px-4 rounded-full'> Manage Credit</button></Link>
        <Link to={'/debit'}><button className='bg-transparent border border-sky-500 font-semibold hover:text-pink-600 hover:border-pink-700 py-4 px-4 rounded-full'>Manage Debit</button></Link>
 
      </div>
    </div>
    </div>
  )
}
export default Dashboard