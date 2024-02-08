import React from 'react';

import 'App.css';

function ThreeColumn () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="m-bw-y-sm">
          <div className="h1 font-weight-bold">
            From the blog
          </div>
          <div className="text-xl mute-75">
            Learn how to grow your business with our expert advice.
          </div>
        </div>
        <hr className="w-100 m-y-5xl border border-color-black-alpha-1"/>
        <div className="row row-gap-xl">
          <div className="col-12 col-4@md">
            <div className="stack-y-l m-bw-y-lg">
              <div className="stack-x-j w-80">
                <div className="text-xs mute-75">
                  Mar 16, 2020
                </div>
                <div className="badge text-sm color-primary bg-color-primary-alpha-1">
                  Marketing
                </div>
              </div>
              <a href="javasciript" className="text-lg font-weight-bold ">
                Boost your conversion rate
              </a>
              <div className="text-md mute-75 truncate-3">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
              </div>
              <div className="stack-x-l m-bw-x-lg">
                <div className="w-20">
                  <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="img" className="radius-full" />
                </div>
                <div className="stack-y-l">
                  <a href="javascirpt">
                    <strong>
                      Michael Foster
                    </strong>
                  </a>
                  <div className="mute-75">
                    Co-Founder / CTO
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 visible@sm hidden@md">
            <hr />
          </div>
          <div className="col-12 col-4@md">
            <div className="stack-y-l m-bw-y-lg">
              <div className="stack-x-j w-80">
                <div className="text-xs mute-75">
                  Mar 10, 2020
                </div>
                <div className="badge text-sm color-primary bg-color-primary-alpha-1">
                  Sales
                </div>
              </div>
              <a href="javasciript" className="text-lg font-weight-bold ">
                How to use search engine optimization<br/>
                to drive sales
              </a>
              <div className="text-md mute-75">
                Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.
              </div>
              <div className="stack-x-l m-bw-x-lg">
                <div className="w-20">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="img" className="radius-full" />
                </div>
                <div className="stack-y-l">
                  <a href="javascirpt">
                    <strong>
                      Lindsay Walton
                    </strong>
                  </a>
                  <div className="mute-75">
                    Front-end Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 visible@sm hidden@md">
            <hr />
          </div>
          <div className="col-12 col-4@md">
            <div className="stack-y-l m-bw-y-lg">
              <div className="stack-x-j w-80">
                <div className="text-xs mute-75">
                  Feb 12, 2020
                </div>
                <div className="badge text-sm color-primary bg-color-primary-alpha-1">
                  Business
                </div>
              </div>
              <a href="javasciript" className="text-lg font-weight-bold ">
                Improve your customer experience
              </a>
              <div className="text-md mute-75 truncate-3">
                Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.
              </div>
              <div className="stack-x-l m-bw-x-lg">
                <div className="w-20">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="img" className="radius-full" />
                </div>
                <div className="stack-y-l">
                  <a href="javascirpt">
                    <strong>
                      Tom Cook
                    </strong>
                  </a>
                  <div className="mute-75">
                    Director of Product
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
export default ThreeColumn;
