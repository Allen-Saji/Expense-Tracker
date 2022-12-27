import React from 'react'
import { Link } from 'react-router-dom'
import login from './Login'

function Signup() {
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
        <h2>Signup</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input
            type="text"
            placeholder="Name"
            class="input_text"
            autocomplete="off"
          />
        </div>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input
            type="text"
            placeholder="Email"
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
          <Link to={"/login"}>Already Registered?</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup