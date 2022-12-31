import card1 from '../assets/card1.png'

function home() {
  return (
    <div className='w-screen h-screen bg-#0c1022'>
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
    </div>

  )
}

export default home