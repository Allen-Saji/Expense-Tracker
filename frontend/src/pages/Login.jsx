import React from 'react'
import { Link } from 'react-router-dom'

function login() {
    $(".input_text").focus(function(){
        $(this).prev('.fa').addclass('glowIcon')
    })
    $(".input_text").focusout(function(){
        $(this).prev('.fa').removeclass('glowIcon')
    })
  return (
    <>
         <div className="login_form_container">
      <div className="login_form">
        <h2>Login</h2>
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="Password"
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="button_group" id="login_button">
          <a>Submit</a>
        </div>
        <div className="footer">
          <Link to={"/signup"}>New User?</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default login