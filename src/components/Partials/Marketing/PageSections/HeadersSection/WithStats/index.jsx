import React from 'react';

import 'App.css';

function WithStats () {
  return (
    <section className="m-y-xl">
      <div className="wrap">
        <div 
        className="m-bw-y-5xl p-x-lg p-y-5xl bg-image radius-md"
        style={
          {
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply)',
          }
        }>
          <div className="m-bw-y-sm">
            <div className="h1 font-weight-bold color-white">
              Work with us
            </div>
            <div className="text-lg color-white mute-75">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
             cupidatat commodo.<br/> Elit sunt amet fugiat fugiat aliqua.
            </div>
          </div>
          <div className="row row-gap-xl">
            <div className="col-12 col-6@md col-2@lg">
              <div className="color-white">
                <a href="javascript">
                  Open roles
                  <i className="icon p-l-sm iconoir-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-6@md col-2@lg">
              <div className="color-white">
                <a href="javascript">
                  Our values
                  <i className="icon p-l-sm iconoir-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-6@md col-2@lg">
              <div className="color-white">
                <a href="javascript">
                  Internship programs
                  <i className="icon p-l-sm iconoir-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-6@md col-2@lg">
              <div className="color-white">
                <a href="javascript">             
                  Meet our leadership
                  <i className="icon p-l-sm iconoir-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row row-gap-xl">
            <div className="col-12 col-6@md col-3@lg">
              <div className="color-white">
                <strong className="h5">
                  12
                </strong>
                <div className="text-lg mute-75">
                  Offices worldwide
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md col-3@lg">
              <div className="color-white">
                <strong className="h5">
                  300+
                </strong>
                <div className="text-lg mute-75">
                  Full-time colleagues
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md col-3@lg">
              <div className="color-white">
                <strong className="h5">
                  40
                </strong>
                <div className="text-lg mute-75">
                  Hours per week
                </div>
              </div>
            </div>
            <div className="col-12 col-6@md col-3@lg">
              <div className="color-white">
                <strong className="h5">
                  Unlimited
                </strong>
                <div className="text-lg mute-75">
                  Paid time off
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithStats;