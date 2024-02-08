import React from 'react';

import 'App.css';

import Input from 'components/Core/Input/index.jsx'

function SideByWithDetails () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="p-xl bg-color-black-alpha-9 radius-xl">
          <div className="row row-gap-xl">
            <div className="col-12 col-6@md">
              <div className="m-bw-y-lg color-white">
                <div className="h4">
                  Subscribe to our newsletter. 
                </div>
                <div className="mute-75">
                  Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.
                </div>
                <div className="stack-x-l m-bw-x-xl">
                  <div className="w-100">
                    <Input
                      id="subscribe"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <label for="subscribe" className="button p-x-xl">
                    About
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md">
              <div className="row row-gap-xl">
                <div className="col-12 col-6@md">
                  <div className="m-bw-y-md color-white">
                    <div className="h4">
                      <i className="icon p-sm border border-color-white-alpha-1 bg-color-white-alpha-1 radius-xl iconoir-cube"></i>
                    </div>
                    <div className="text-xl">
                      Weekly articles
                    </div>
                    <div className="text-sm mute-75">
                      Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-6@md">
                  <div className="m-bw-y-md color-white">
                    <div className="h4">
                      <i className="icon p-sm border border-color-white-alpha-1 bg-color-white-alpha-1 radius-xl iconoir-drag-hand-gesture"></i>
                    </div>
                    <div className="text-xl">
                      Weekly articles
                    </div>
                    <div className="text-sm mute-75">
                      Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SideByWithDetails;