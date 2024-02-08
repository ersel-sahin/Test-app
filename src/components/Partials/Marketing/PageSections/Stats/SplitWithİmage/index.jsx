import React from 'react';

import 'App.css';

function SimpleGrid () {
  return (
    <section className="m-y-sm">
      <div className="wrap">
        <div className="absolute top-0 right-0 w-50 h-100vh bg-image hidden@sm visible@md"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80)`,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-100 h-25vh bg-image visible@sm hidden@md"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80)`,
          }}
        ></div>
        <div className="space-5xl visible@sm hidden@md"></div>
        <div className="stack-y-c m-bw-y-lg p-r-lg w-100 w-50@md h-100vh">
          <div className="m-bw-y-md">
            <div className="font-weight-bold color-primary">
            Our track record
            </div>
            <div className="h3 font-weight-bold">
              Trusted by thousands of creators worldwide
            </div>
            <div className="line-height-lg letter-spacing-sm mute-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </div>
          </div>
          <div className="row row-gap-xl">
            <div className="col-12 col-6@md">
              <div className="m-bw-y-md p-l-md border-l border-color-primary">
                <div className="h3 font-weight-bold">
                  8,000+
                </div>
                <div className="text-sm mute-75">
                  Creators on the platform
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md">
              <div className="m-bw-y-md p-l-md border-l border-color-primary">
                <div className="h3 font-weight-bold">
                  %3
                </div>
                <div className="text-sm mute-75">
                  Flat platform fee
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md">
              <div className="m-bw-y-md p-l-md border-l border-color-primary">
                <div className="h3 font-weight-bold">
                  99.9%
                </div>
                <div className="text-sm mute-75">
                  Uptime guarantee
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md">
              <div className="m-bw-y-md p-l-md border-l border-color-primary">
                <div className="h3 font-weight-bold">
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