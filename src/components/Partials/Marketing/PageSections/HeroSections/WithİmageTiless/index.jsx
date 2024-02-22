import React from "react";
import 'App.css';


function WithİmageTiless() {
  return (
    <section className="stack-y-c p-y-xl h-100vh@md bg-image"
    style={{
      backgroundImage:'url(https://wallpaperset.com/w/full/2/8/0/521071.jpg)',
    }}
    >
      <div className="wrap">
        <div className="row row-gap-xl">
          <div className="col-12 col-6@md stack-y-c">
            <div className="m-bw-y-xl p-r-xl color-white">
              <div className="display-5 font-weight-bold">
                We’re changing the way people connect.
              </div>
              <p className="p-r-xl letter-spacing-xs mute-75">
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor.
              </p>
              <div className="stack-x-l m-bw-x-xl">
                <a href="javascript:;" className="button">
                  <span>Get started</span>
                </a>
                <a href="javascript:;" className="button button-style-link button-color-white">
                  <span>Live demo</span>
                  <i className="p-l-sm text-md iconoir-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-6@md">
            <div className="row row-gap-xl">
              <div className="col-6 col-4@md stack-y-c">
                <img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="radius-xl"/>
              </div>
              <div className="col-6 col-4@md stack-y-c">
                <div className="m-bw-y-xl">
                  <img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="" className="radius-xl"/>
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="" className="radius-xl"/>
                </div>
              </div>
              <div className="col-4 stack-y-t hidden@sm visible@md">
                <div className="m-bw-y-xl">
                  <img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="" className="radius-xl"/>
                  <img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" className="radius-xl"/>
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="" className="radius-xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WithİmageTiless;