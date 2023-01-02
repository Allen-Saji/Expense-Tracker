import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'


function Signup() {

    $(".input_text").focus(function(){
        $(this).prev('.fa').addclass('glowIcon')
    })
    $(".input_text").focusout(function(){
        $(this).prev('.fa').removeclass('glowIcon')
    })

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
    })
  
    const { name, email, password, password2 } = formData
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const { isLoading } = useSelector((state) => state.auth)
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  
    // NOTE: no need for useEffect here as we can catch the
    // AsyncThunkAction rejection in our onSubmit or redirect them on the
    // resolution
    // Side effects shoulld go in event handlers where possible
    // source: - https://beta.reactjs.org/learn/keeping-components-pure#where-you-can-cause-side-effects
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      if (password !== password2) {
        toast.error('Passwords do not match')
      } else {
        const userData = {
          name,
          email,
          password,
        }
  
        dispatch(register(userData))
          .unwrap()
          .then((user) => {
            // NOTE: by unwrapping the AsyncThunkAction we can navigate the user after
            // getting a good response from our API or catch the AsyncThunkAction
            // rejection to show an error message
            toast.success(`Registered new user - ${user.name}`)
            navigate('/')
          })
          .catch(toast.error)
      }
    }
  
    if (isLoading) {
      return <Spinner />
    }
  


  return (
    <>
         <div className="login_form_container">
      <div className="login_form">
        <h2>Signup</h2>
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Name"
            name='name'
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Email"
            name='email'
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
            type="password"
            name='password'
            placeholder="Password"
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
            type="password"
            name='password2'
            placeholder="Confirm Password"
            className="input_text"
            autoComplete="off"
          />
        </div>
        
        <div className="button_group" id="login_button">
          <a>Submit</a>
        </div>
        <div className="footer">
          <Link to={"/login"}>Already Registered?</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup