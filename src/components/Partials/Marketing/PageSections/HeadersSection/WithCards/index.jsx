import React from 'react';

import 'App.css';

function WithCards () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div 
        className="p-x-xl p-y-5xl bg-image radius-md"
        style={
          {
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply)',
          }
        }>
          <div className="m-bw-y-lg">
            <div className="h1 font-weight-bold color-white">
              Work with us
            </div>
            <div className="text-lg letter-spacing-sm color-white mute-75">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.<br/> Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </div>
          </div>
          <div className="space-5xl"></div>
          <div className="row row-gap-xl">
            <div className="col-12 col-4@md">
              <div className="stack-x-t m-bw-x-md p-xl border border-color-gray-alpha-5 bg-color-gray-alpha-2 color-white radius-xl">
                  <i className="iconoir-phone text-xl"></i>
                <div className="stack-y-l m-bw-y-sm">
                  <div className="font-weight-bold">
                    Sales
                  </div>
                  <div className="line-height-md letter-spacing-sm mute-75">
                    Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-4@md">
              <div className="stack-x-t m-bw-x-md p-xl border border-color-gray-alpha-5 bg-color-gray-alpha-2 color-white radius-xl">
                  <i className="iconoir-book-stack text-xl"></i>
                <div className="stack-y-l m-bw-y-sm">
                  <div className="font-weight-bold">
                    Media Inquiries
                  </div>
                  <div className="line-height-md letter-spacing-sm mute-75">
                    Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-4@md">
              <div className="stack-x-t m-bw-x-md p-xl border border-color-gray-alpha-5 bg-color-gray-alpha-2 color-white radius-xl">
                  <i className="iconoir-soccer-ball text-xl"></i>
                <div className="stack-y-l m-bw-y-sm">
                  <div className="font-weight-bold">
                    Technical Support
                  </div>
                  <div className="line-height-md letter-spacing-sm mute-75">
                  Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithCards;