import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

  return (
    <>
    <header className='header'>
        <div className="logo">
            <Link to={'/'}>Expense Tacker</Link>
        </div>
        <ul>
        {user ? (
            <li>
                <button className="btn" onClick={onLogout}>
                    <FaSignOutAlt />Logout
                </button>
            </li>
        ) : ( 
            <>
            <li>
                <Link to={'/login'}>
                    <FaSignInAlt />Login
                </Link>
            </li>
            <li>
                <Link to={'/signup'}>
                    <FaUser />Register
                </Link>
            </li></>
            )}
        </ul>
    </header>
    <div className="hr"></div>
    </>
  )
}

export default Header