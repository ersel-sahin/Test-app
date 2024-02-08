import React from 'react';

import 'App.css';

function WithActions () {
  return (
    <section className="m-y-2xl">
      <div className="wrap">
        <div className="alert alert-color-green">
          <div className="stack-x-t m-bw-x-md alert-close color-green">
            <div className="h6 color-green">
              <i className="icon iconoir-warning-circle"></i>
            </div>
            <div className="stack-y-l m-bw-y-sm">
              <div className="font-weight-bold">
                Attention needed
              </div>
              <div className="mute-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam doloribus rem saepe iure, vitae asperiores unde.
              </div>
              <div className="stack-x-l m-bw-x-lg p-t-md font-weight-bold">
                <a href="javascript">
                  View Status
                </a>
                <a href="javascript">
                  Dismiss
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithActions;