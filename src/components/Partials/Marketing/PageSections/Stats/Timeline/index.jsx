import React from 'react';

import 'App.css';

function Timeline () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="row row-gap-y-lg">
          <div className="col-12 col-3@md">
            <div className="m-bw-y-xl">
              <div className="stack-x-l m-bw-x-md">
                <span className="h5 color-primary">•</span>
                <strong className="white-space-nowrap m-r-md color-primary">Aug 2021</strong>
                <hr className="w-100 m-r-xs hidden visible@md"/>
              </div>
              <div className="stack-y-l m-bw-y-md p-r-3xl">
                <div className="text-lg font-weight-bold">
                  Founded company
                </div>
                <p className="mute-75">
                  I started my career as a software engineer at a company.Aspernatur asperiores et dolorem dolorem optio voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-3@md">
            <div className="m-bw-y-xl">
              <div className="stack-x-l m-bw-x-md">
                <span className="h5 color-primary">•</span>
                <strong className="white-space-nowrap m-r-md color-primary">Dec 2021</strong>
                <hr className="w-100 m-r-xs hidden visible@md"/>
              </div>
              <div className="stack-y-l m-bw-y-md p-r-3xl">
                <div className="text-lg font-weight-bold">
                  Secured $65m in funding
                </div>
                <p className="mute-75">
                  I started my career as a software engineer at a company.Cumque minima impedit sapiente a architecto nihil.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-3@md">
            <div className="m-bw-y-xl">
              <div className="stack-x-l m-bw-x-md">
                <span className="h5 color-primary">•</span>
                <strong className="white-space-nowrap m-r-md color-primary">Feb 2021</strong>
                <hr className="w-100 m-r-xs hidden visible@md"/>
              </div>
              <div className="stack-y-l m-bw-y-md p-r-3xl">
                <div className="text-lg font-weight-bold">
                  Released beta
                </div>
                <p className="mute-75">
                  Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-3@md">
            <div className="m-bw-y-xl">
              <div className="stack-x-l m-bw-x-md">
                <span className="h5 color-primary">•</span>
                <strong className="white-space-nowrap m-r-md color-primary">Dec 2021</strong>
                <hr className="w-100 m-r-xs hidden visible@md"/>
              </div>
              <div className="stack-y-l m-bw-y-md p-r-3xl">
                <div className="text-lg font-weight-bold">
                  Global launch of product
                </div>
                <p className="mute-75">
                  I started my career as a software engineer at a company.Cumque minima impedit sapiente a architecto nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Timeline;