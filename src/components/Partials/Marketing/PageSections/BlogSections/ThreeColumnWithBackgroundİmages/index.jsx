import React from 'react';

import 'App.css';

function ThreeColumnWithBackgroundİmages () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-c m-bw-y-md">
          <div className="h3 font-weight-bold">
            From the blog
          </div>
          <div className="text-lg color-black-alpha-6">
            Learn how to grow your business with our expert advice.
          </div>
        </div>
        <div className="space-5xl"></div>
        <div className="row row-gap-lg">
          <div className="col-12 col-4@md">
            <a href="javascript:;"
              className="stack-y-bl h-50vh p-y-5xl p-x-lg bg-image radius-xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80)'
              }}
            > 
              <div className="stack-y-jl h-20 m-bw-y-md z-10">
                <div className="stack-x-l m-bw-x-md color-white">
                  <span>
                    Mar 16, 2023
                  </span>
                  <span className="h5">
                    •
                  </span>
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="w-10 radius-full"/>
                  <span>
                    Michael Foster
                  </span>
                </div>
                <div className="text-xl color-white font-weight-bold">
                  Boost your conversion rate
                </div>
              </div>
            </a>
            <div className="absulote bottom-100 h-100 mask-gradient-t bg-color-black-alpha-9 radius-xl"></div>
          </div>
          <div className="col-12 col-4@md">
            <a href="javascript:;"
              className="stack-y-bl h-50vh p-y-5xl p-x-lg bg-image radius-xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)'
              }}
            > 
              <div className="stack-y-jl h-20 m-bw-y-md  z-10">
                <div className="stack-x-l m-bw-x-md color-white">
                  <span>
                    Mar 10, 2023
                  </span>
                  <span className="h5">
                    •
                  </span>
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="w-10 radius-full"/>
                  <span>
                    Tom Cook
                  </span>
                </div>
                <div className="text-xl color-white font-weight-bold">
                  Improve your customer experience
                </div>
              </div>
            </a>
            <div className="absulote bottom-100 h-100 mask-gradient-t bg-color-black-alpha-9 radius-xl"></div>
          </div>
          <div className="col-12 col-4@md">
            <a href="javascript:;"
              className="stack-y-bl h-50vh p-y-5xl p-x-lg bg-image radius-xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)'
              }}
            > 
              <div className="stack-y-jl h-20 m-bw-y-md z-10">
                <div className="stack-x-l m-bw-x-md color-white">
                  <span>
                    Feb 12, 2023
                  </span>
                  <span className="h5">
                    •
                  </span>
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="w-10 radius-full"/>
                  <span>
                    Michael Foster
                  </span>
                </div>
                <div className="text-xl color-white font-weight-bold">
                  How to use search engine optimization to drive sales
                </div>
              </div>
            </a>
            <div className="absulote bottom-100 h-100 mask-gradient-t bg-color-black-alpha-9 radius-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ThreeColumnWithBackgroundİmages;
