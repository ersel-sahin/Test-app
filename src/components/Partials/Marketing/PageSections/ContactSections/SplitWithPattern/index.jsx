import React from 'react';

import 'App.css';

import Input from 'components/Core/Input/index.jsx';

function SplitWithPattern() {
  return (
    <section>
      <div className="wrap">
        <div className="row row-gap-md">
          <div className="col-12 col-6@md">
            <div className="stack-y-l h-100vh@md m-bw-y-xl p-xl bg-image"
                  style=
                  {{
                    backgroundImage: 'url(https://img.freepik.com/free-vector/silver-bokeh-lights-background_1048-10972.jpg)',
                  }}
            >
              <div className="h4 font-weight-bold">
                Get in touch
              </div>
              <div className="text-xl letter-spacing-sm color-black-alpha-7">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
              </div>
              <div className="m-bw-y-md">
                <div className="stack-x-tl m-bw-x-md">
                  <i className="iconoir-building h6 mute"></i>
                  <div className="stack-y-l text-lg letter-spacing-xs color-black-alpha-7">
                    <span>
                      545 Mavis Island
                    </span>
                    <span>
                      545 Mavis Island
                    </span>
                  </div>
                </div>
                <div className="stack-x-tl m-bw-x-md">
                  <i className="iconoir-phone h6 mute"></i>
                  <div className="stack-y-l text-lg letter-spacing-xs color-black-alpha-7">
                    <a href="javascript:;">
                      +1 (555) 234-5678
                    </a>
                  </div>
                </div>
                <div className="stack-x-tl m-bw-x-md">
                  <i className="iconoir-mail h6 mute"></i>
                  <div className="stack-y-l text-lg letter-spacing-xs color-black-alpha-7">
                    <a href="javascript:;">
                      hello@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-6@md">
            <div className="stack-y-l h-100vh@md p-xl">
              <div className="row row-gap-lg">
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
                </div>
                <div className="col-12">
                  <div className="stack-x-r">
                    <a href="javascript:;" className="button">
                      Send message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplitWithPattern;