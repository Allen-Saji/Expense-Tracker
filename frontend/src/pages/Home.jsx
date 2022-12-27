import React from 'react'
import card1 from '../assets/card1.png'
import { Link } from 'react-router-dom'


function home() {
  const year = new Date().getFullYear();
  return (
    <div className='w-screen h-screen bg-#0c1022'>
        <div className="header w-screen px-5 py-2 flex  justify-between">
              <div className="logo">
                <h3 className='text-4xl font-bold text-sky-500 '>Expense Tracker</h3>
              </div>
              <div className="button">
                <Link to="/login"><button className='rounded w-50 h-25 hover:bg-sky-500 hover:text-white bg-transparent text-sky-500 border border-sky-500 p-2' >
                login/register</button></Link>
              </div>
        </div>
        <main className='flex flex-auto'>
          <div className="content-left px-5 mt-10">
            <div className="content-header p-20 ">
              <h2 className='text-zinc-900 text-4xl'>Having trouble <br /> keeping track of <br /> your expenses?</h2>
            </div>
            <div className="content-para flex justify-center p-5 mt-10 text-2xl">
              <p >Expense Tracker lets you keep track of all your daily expenses 
              and segregates them into categories, letting you know where do you spend the most. 
              It also gives your monthly expenditure summary along with illustrative charts and
              other analytics.</p>
            </div>
          </div>
          <div className="content-right flex flex-col justify-center">
            <img src={card1} alt="card" className='img1' />
          </div>
        </main>
        <footer className='w-screen flex flex-auto justify-center p-0 mt-10'>
            <p className='text-2xl text-sky-500'>Copyright ©️ Expense Tracker {year}</p>
        </footer>
    </div>

  )
}

export default home