import React from 'react';

import 'App.css';

function SimpleGrid () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-c p-xl">
          <div className="m-bw-y-lg text-center">
            <div className="h3 font-weight-bold">
              Trusted by creators worldwide
            </div>
            <div className="text-lg mute-75">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </div>
          </div>
          <div className="space-3xl"></div>
          <div className="row row-gap-xs">
            <div className="col-12 col-6@md col-3@lg">
              <div className="text-center font-weight-bold p-xl bg-color-black-alpha-1
                radius-tr-xl@sm radius-tr-none@md
                radius-tl-xl radius-bl-xl@lg
                radius-bl-none@md"
              >
                <div className="h3">
                  8,000+
                </div>
                <div className="text-sm mute-75">
                  Creators on the platform
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md col-3@lg">
              <div className="text-center font-weight-bold p-xl bg-color-black-alpha-1 radius-tr-xl@md radius-tr-none@lg">
                <div className="h3">
                  3%
                </div>
                <div className="text-sm mute-75">
                  Flat platform fee
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md col-3@lg">
              <div className="text-center font-weight-bold p-xl bg-color-black-alpha-1 radius-bl-xl@md radius-bl-none@lg">
                <div className="h3">
                  99.9%
                </div>
                <div className="text-sm mute-75">
                  Uptime guarantee
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md col-3@lg">
              <div className="text-center font-weight-bold p-xl bg-color-black-alpha-1 
                radius-bl-xl@sm radius-bl-none@md 
                radius-tr-none@md radius-tr-xl@lg 
                radius-br-xl"
              >
                <div className="h3">
                  $70M
                </div>
                <div className="text-sm mute-75">
                  Paid out to creators
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SimpleGrid;