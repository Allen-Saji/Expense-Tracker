import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

function login() {
    $(".input_text").focus(function(){
        $(this).prev('.fa').addclass('glowIcon')
    })
    $(".input_text").focusout(function(){
        $(this).prev('.fa').removeclass('glowIcon')
    })
  return (
    <>
         <div class="login_form_container">
      <div class="login_form">
        <h2>Login</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            class="input_text"
            autocomplete="off"
          />
        </div>
        <div class="input_group">
          <i class="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="Password"
            class="input_text"
            autocomplete="off"
          />
        </div>
        <div class="button_group" id="login_button">
          <a>Submit</a>
        </div>
        <div class="footer">
          <Link to={"/signup"}>New User?</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default login