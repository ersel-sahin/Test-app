import React from 'react';

import 'App.css';

function WithDescription () {
  return (
    <section className="m-y-2xl">
      <div className="wrap">
        <div className="alert alert-color-primary">
          <div className="stack-x-t m-bw-x-md alert-close color-red-alpha-9">
            <div className="h6 color-primary">
              <i className="icon iconoir-warning-triangle"></i>
            </div>
            <div className="stack-y-l m-bw-y-sm">
              <div className="font-weight-bold">
                Attention needed
              </div>
              <div className="mute-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam doloribus rem veritatis saepe iure, vitae asperiores unde. Aperiam ratione in aut eius cumque, minus a atque magni, similique, nesciunt laboriosam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithDescription;