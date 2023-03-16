import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import CreditItem from '../components/CreditItem'
import { createDebit, getDebits, updateDebit, deleteDebit } from '../features/transactions/debitSlice'
import {FaRupeeSign} from 'react-icons/fa'



function ManageDebit() {
    const  {debits}  = useSelector((state) => state.debits)

    const dispatch = useDispatch()
  
    // NOTE: only need one useEffect here
  
    useEffect(() => {
      dispatch(getDebits())
    }, [dispatch])
  
    
  
    if (!debits) {
      return <Spinner />
    }
  
    let sum_debit = 0;
    
  
     debits.forEach(element => {
       sum_debit+=element.amount;
    });
  
    return (
      <div className='flex'>
      <div className="glass p-10 m-10 outline-dashed  border-sky-500">
      <h4 className=" flex justify-center text-3xl mb-7">Recent Debits</h4>
      {debits.map((element) => (
        <CreditItem key={element._id} transaction={element} />
      ))} 
      </div>
      <div className="right-dash flex flex-col">
        <div className="h-32 p-2 flex justify-center m-8">
        <div className="amt-box flex flex-col">
          <div className="amt-label">
            <p>total debits this month</p>
          </div>
          <div className="amt-content flex m-auto text-3xl">
          <FaRupeeSign />{sum_debit}
          </div>
          </div>
        </div>
      </div>
      </div>
    )
}
export default ManageDebit