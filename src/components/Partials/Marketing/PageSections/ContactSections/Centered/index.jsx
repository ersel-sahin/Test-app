import React from 'react';

import 'App.css';
import 'css/Contact/main.css';

import Input from 'components/Core/Input/index.jsx';

function Centered() {
  return (
    <section className="m-y-5xl">
      <div className="wrap-mini">
        <form>
          <fieldset className="p-md">
            <div className="row row-gap-lg">
              <div className="col-12">
                <legend className="text-center m-bw-y-sm">
                  <div className="h3 font-weight-bold">
                    Contact sales
                  </div>
                  <div className="mute-75">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                  </div>
                </legend>
                <div className="space-xl"></div>
              </div>
              <div className="col-12 col-6@md">
                <label for="firstname" className="input-col-label">
                First name
                </label>
                <Input
                  name="firstname"
                  id="firstname"
                />
              </div>
              <div className="col-12 col-6@md">
                <label for="lastname" className="input-col-label">
                  Last name
                </label>
                <Input
                name="lastname"
                id="lastname"
                />
              </div>
              <div className="col-12">
                <label for="streetaddress" className="input-col-label">
                  Company
                </label>
                <Input
                  name="streetaddress"
                  id="streetaddress"
                />
              </div>
              <div className="col-12">
                <label for="emailaddress" className="input-col-label">
                  Email address
                </label>
                <Input
                name="emailaddress"
                id="emailaddress"
                />
              </div>
              <div className="col-12">
                <label for="message" className="input-col-label">
                  Message
                </label>
                <textarea name="text" id="message" className="input input-line-5"></textarea>
                <div className="p-y-xl">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span className="p-l-md mute-75">By selecting this, you agree to our </span> 
                  <a href="javascript" className="font-weight-bold color-primary">
                    privacy policy.
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="button button-block">
                  Les't talk
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Centered;