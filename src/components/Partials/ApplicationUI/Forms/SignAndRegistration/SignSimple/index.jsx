import React from 'react';

import 'App.css';

import Input from 'components/Core/Input/index.jsx';

function SignSimple () {
  return (
    <section className="stack-y-c h-100vh">
      <div className="wrap">
        <div className="stack-y-c m-bw-y-xl">
          <div className="logo">
            <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </div>
          <div className="h3 font-weight-bold">
            Sign in to your account
          </div>
          <div className="w-100 w-40@md m-bw-y-lg">
            <div>
              <label for="emailaddress" className="input-col-label">
                <strong>Email</strong>
              </label>
              <Input
                    name="emailaddress"
                    id="emailaddress"
              />
            </div>
            <div>
              <div className="stack-x-j">
                <div>
                  <label for="password" className="input-col-label">
                    <strong>Password</strong>
                  </label>
                </div>
                <div>
                  <label for="password" className="input-col-label color-primary">
                    <strong>Forgot Password?</strong>
                  </label>
                </div>
              </div>
              <Input
                    name="password"
                    id="password"
              />
            </div>
            <a href="javascript" className="button button-block">
              Sign in
            </a>
            <div className="text-center">
              <span className="mute">Not a member? </span><a href="javascript" className="font-weight-bold color-primary">Start a 14 day free trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SignSimple;