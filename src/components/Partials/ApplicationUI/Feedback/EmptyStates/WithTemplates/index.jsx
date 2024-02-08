import React from 'react';

import 'App.css';

function WithTemplates () {
  return (
    <section className="m-y-2xl">
      <div className="wrap">
        <div className="stack-y-c">
          <div className="m-bw-y-lg w-60@md">
            <div className="m-bw-y-sm">
              <div className="text-lg font-weight-bold">
                Create your first project
              </div>
              <div className="mute">
                Get started by selecting a template or start from an empty project.
              </div>
            </div>
            <div>
              <hr className="w-100 border border-color-black-alpha-2"/>
            </div>
            <a href="javascript">
              <div className="stack-x-j w-100">
                <div className="stack-x-l m-bw-x-lg">
                  <div className="h5 p-md bg-color-secondary radius-lg">
                    <i className="icon iconoir-megaphone color-white"></i>
                  </div>
                  <div className="stack-y-l">
                    <div className="font-weight-bold">
                      Marketing Campaign
                    </div>
                    <div className="mute">
                      Another to-do system you'll try but eventually give up on.
                    </div>
                  </div>
                </div>
                <div className="h4 mute">
                  <i className="icon iconoir-nav-arrow-right"></i>
                </div>
              </div>
            </a>
            <div>
              <hr className="w-100 border border-color-black-alpha-2"/>
            </div>
            <a href="javascript">
              <div className="stack-x-j w-100">
                <div className="stack-x-l m-bw-x-lg">
                  <div className="h5 p-md bg-color-purple radius-lg">
                    <i className="icon iconoir-code color-white"></i>
                  </div>
                  <div className="stack-y-l">
                    <div className="font-weight-bold">
                      Engineering Project
                    </div>
                    <div className="mute">
                      Another to-do system you'll try but expensive that eventually give up on.
                    </div>
                  </div>
                </div>
                <div className="h4 mute">
                  <i className="icon iconoir-nav-arrow-right"></i>
                </div>
              </div>
            </a>
            <div>
              <hr className="w-100 border border-color-black-alpha-2"/>
            </div>
            <a href="javascript">
              <div className="stack-x-j w-100">
                <div className="stack-x-l m-bw-x-lg">
                  <div className="h5 p-md bg-color-yellow radius-lg">
                    <i className="icon iconoir-calendar color-white"></i>
                  </div>
                  <div className="stack-y-l">
                    <div className="font-weight-bold">
                      Engineering Project
                    </div>
                    <div className="mute">
                      Another system you'll try but expensive that eventually give up on.
                    </div>
                  </div>
                </div>
                <div className="h4 mute">
                  <i className="icon iconoir-nav-arrow-right"></i>
                </div>
              </div>
            </a>
            <div>
              <hr className="w-100 border border-color-black-alpha-2"/>
            </div>
            <a href="javascript" className="button button-style-link">
              <span>Or start from an empty project</span>
              <i className="icon iconoir-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithTemplates;