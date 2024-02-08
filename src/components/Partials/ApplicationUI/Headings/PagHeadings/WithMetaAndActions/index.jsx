import React from 'react';

import 'App.css';

function WithMetaAndActions () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-l m-bw-y-lg stack-x-j@md">
          <div className="stack-y-l m-bw-y-sm">
            <div className="h1 font-weight-bold color-black">
              Back End Developer
            </div>
            <div className="stack-y-l m-bw-y-md m-bw-y-none@md stack-x-l@lg m-bw-x-xl@lg color-black-alpha-5">
              <div className="stack-x-l">
                <div className="stack-x-l m-bw-x-sm">
                  <div className="h5">
                  <i className="iconoir-beach-bag"></i>
                  </div>
                  <div className="text-md">
                    Full-time
                  </div>
                </div>
              </div>
              <div className="stack-x-l">
                <div className="stack-x-l m-bw-x-sm">
                  <div className="h5">
                  <i className="iconoir-map-pin"></i>
                  </div>
                  <div className="text-md">
                    Remote
                  </div>
                </div>
              </div>
              <div className="stack-x-l">
                <div className="stack-x-l m-bw-x-sm">
                  <div className="h5">
                  <i className="iconoir-dollar-circle"></i>
                  </div>
                  <div className="text-md">
                    $120k&nbsp;-&nbsp;$140k
                  </div>
                </div>
              </div>
              <div className="stack-x-l">
                <div className="stack-x-l m-bw-x-sm">
                  <div className="h5">
                  <i className="iconoir-calendar"></i>
                  </div>
                  <div className="text-md">
                    Closing on January 9, 2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stack-x-l m-bw-x-md">
            <a href="javascript" className="button button-style-outline button-color-gray">
              <i className="icon iconoir-edit-pencil p-r-sm"></i>
              <strong>Edit</strong>
            </a>
            <a href="javascript" className="button button-style-outline button-color-gray">
              <i className="icon iconoir-magic-wand p-r-sm"></i>
              <strong>View</strong>
            </a>
            <a href="javascript" className="button">
              <i className="icon iconoir-check"></i>
              <span>Publish</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithMetaAndActions;