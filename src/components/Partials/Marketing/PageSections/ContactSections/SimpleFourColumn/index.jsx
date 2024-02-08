import React from 'react';

import 'App.css';

function SimpleFourColumn() {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="m-bw-y-lg w-60@md">
          <div className="h4 font-weight-bold">
            Our offices
          </div>
          <div className="text-xl letter-spacing-sm line-height-lg mute-75">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
          </div>
        </div>
        <div className="space-5xl"></div>
        <div className="row row-gap-xl">
          <div className="col-12 col-6@md col-3@lg">
            <div className="stack-x-tl m-bw-x-lg">
              <div className="stack-y-l">
                <div className="bg-color-primary-alpha-9" style={{width:'2px',height:'25px'}}></div>
                <div className="bg-color-black-alpha-1" style={{width:'2px',height:'55px'}}></div>
              </div>
              <div className="m-bw-y-sm text-lg">
                <div className="font-weight-bold">
                  Los Angeles
                </div>
                <div className="mute-75">
                  4556 Brendan Ferry<br/>
                  Los Angeles, CA 90210
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-6@md col-3@lg">
            <div className="stack-x-tl m-bw-x-lg">
              <div className="stack-y-l">
                <div className="bg-color-primary-alpha-9" style={{width:'2px',height:'25px'}}></div>
                <div className="bg-color-black-alpha-1" style={{width:'2px',height:'55px'}}></div>
              </div>
              <div className="m-bw-y-sm text-lg">
                <div className="font-weight-bold">
                  London
                </div>
                <div className="mute-75">
                  114 Cobble Lane<br/>
                  London N1 2EF
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-6@md col-3@lg">
            <div className="stack-x-tl m-bw-x-lg">
              <div className="stack-y-l">
                <div className="bg-color-primary-alpha-9" style={{width:'2px',height:'25px'}}></div>
                <div className="bg-color-black-alpha-1" style={{width:'2px',height:'55px'}}></div>
              </div>
              <div className="m-bw-y-sm text-lg">
                <div className="font-weight-bold">
                  Toronto
                </div>
                <div className="mute-75">
                  7363 Cynthia Pass<br/>
                  Toronto, CA 90210
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-6@md col-3@lg">
            <div className="stack-x-tl m-bw-x-lg">
              <div className="stack-y-l">
                <div className="bg-color-primary-alpha-9" style={{width:'2px',height:'25px'}}></div>
                <div className="bg-color-black-alpha-1" style={{width:'2px',height:'55px'}}></div>
              </div>
              <div className="m-bw-y-sm text-lg">
                <div className="font-weight-bold">
                  New York
                </div>
                <div className="mute-75">
                  4556 Brendan Ferry<br/>
                  New York, NY 12345
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleFourColumn;