import React from 'react';

import 'App.css';

function DarkPanelWithAppScreenshot () {
  return (
    <section className="stack-y-c m-y-5xl">
      <div className="wrap">
        <div className="stack-y-c stack-x-j@md p-xl bg-color-black-alpha-9 radius-xl">
          <div className="stack-y-l m-bw-y-lg p-b-lg w-100@sm color-white-alpha-9">
            <div className="h3 font-weight-bold color-white-alpha-9">
              Boost your productivity.<br />
              Start using our app today.
            </div>
            <div className="text-sm line-height-lg mute-75 color-white-alpha-9">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.<br/>
              Malesuada adipiscing sagittis vel nulla.
            </div>
            <div className="stack-x-l m-bw-x-lg">
              <div className="button button-color-white">
                Get started
              </div>
              <div className="button button-style-plain button-color-white">
                <span>Get started</span>
                <i className="icon iconoir-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="w-100@sm">
            <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="home"/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DarkPanelWithAppScreenshot;