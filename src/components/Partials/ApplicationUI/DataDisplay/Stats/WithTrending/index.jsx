import React from 'react';

import 'App.css';

function WithTrending () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="row">
          <div className="col-12 col-6@md col-3@lg">
            <div className="p-xl m-bw-y-sm border border-r-@md border-b-none@md border-b@lg border-color-black-alpha-1 radius-t-md radius-tr-none@md radius-bl-md@lg">
              <div className="stack-x-j">
                <div className="text-sm mute-75 letter-spacing-sm">
                  Revenue
                </div>
                <div className="text-sm color-red">
                  -4,75%
                </div>
              </div>
              <div className="h3 font-weight-bold">
                $405,091.00
              </div>
            </div>
          </div>
          <div className="col-12 col-6@md col-3@lg">
            <div className="p-xl m-bw-y-sm border-r border-l border-l-none@md border-t@md border-b@lg border-color-black-alpha-1 radius-tr-md@md radius-tr-none@lg">
              <div className="stack-x-j">
                <div className="text-sm mute-75 letter-spacing-sm">
                  Overdue invoices
                </div>
                <div className="text-sm color-green">
                  +54.02%
                </div>
              </div>
              <div className="h3 font-weight-bold">
                $12,787.00
              </div>
            </div>
          </div>
          <div className="col-12 col-6@md col-3@lg">
            <div className="p-xl m-bw-y-sm border-r border-l border-t border-b@md border-l-none@lg border-color-black-alpha-1 radius-bl-md@md radius-bl-none@lg">
              <div className="stack-x-j">
                <div className="text-sm mute-75 letter-spacing-sm">
                  Outstanding invoices
                </div>
                <div className="text-sm color-red">
                  -1.39%
                </div>
              </div>
              <div className="h3 font-weight-bold">
                $245,988.00
              </div>
            </div>
          </div>
          <div className="col-12 col-6@md col-3@lg">
            <div className="p-xl m-bw-y-sm border border-l-none@md border-color-black-alpha-1 radius-b-md radius-bl-none@md radius-tr-md@lg">
              <div className="stack-x-j">
                <div className="text-sm mute-75 letter-spacing-sm">
                  Expenses
                </div>
                <div className="text-sm color-green">
                  +10.18%
                </div>
              </div>
              <div className="h3 font-weight-bold">
                $30,156.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithTrending;