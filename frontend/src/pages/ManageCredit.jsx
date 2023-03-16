import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import CreditItem from '../components/CreditItem'
import { createCredit, getCredits, updateCredit, deleteCredit } from '../features/transactions/creditSlice'
import {FaRupeeSign} from 'react-icons/fa'
import functions from '../components/functions'


function ManageCredit() {
  const  {credits}  = useSelector((state) => state.credits)

  const dispatch = useDispatch()

  // NOTE: only need one useEffect here

  useEffect(() => {
    dispatch(getCredits())
  }, [dispatch])

  if (!credits) {
    return <Spinner />
  }

  let sum_credit = 0;
  

   credits.forEach(element => {
     sum_credit+=element.amount;
  });



  return (
    <div className='flex'>
    <div className="glass p-10 m-10 outline-dashed  border-sky-500">
    <h4 className=" flex justify-center text-3xl mb-7">Recent Credits</h4>
    {credits.map((element) => (
     <CreditItem key={element._id} transaction={element} />
    ))} 
    </div>
    <div className="right-dash flex flex-col">
      <div className="h-32 p-2 flex justify-center m-8">
      <div className="amt-box flex flex-col ">
        <div className="amt-label">
          <p>total credits this month</p>
        </div>
        <div className="amt-content flex m-auto text-3xl">
        <FaRupeeSign />{sum_credit}
        </div>
        </div>
      </div>
      <div className="credit-buttons flex justify-center space-x-20">
      <button className='bg-transparent border border-sky-500 font-semibold hover:text-pink-600 hover:border-pink-700 py-4 px-4 rounded-full'> Add Credit</button>
      <button className='bg-transparent border border-sky-500 font-semibold hover:text-pink-600 hover:border-pink-700 py-4 px-4 rounded-full' onClick={functions.addDeleteSymbol}> Delete Credit</button>
      <button className='bg-transparent border border-sky-500 font-semibold hover:text-pink-600 hover:border-pink-700 py-4 px-4 rounded-full' onClick={functions.addEditSymbol}> Edit Credit</button>
      </div>
    </div>
    </div>
  )
}
export default ManageCredit