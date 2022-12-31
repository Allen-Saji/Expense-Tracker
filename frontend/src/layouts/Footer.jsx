function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className='w-screen flex flex-auto justify-center p-0 mb-10 '>
            <p className='text-2xl text-sky-500'>Copyright ©️ Expense Tracker {year}</p>
        </footer>
  )
}
export default Footer