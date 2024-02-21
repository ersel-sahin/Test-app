import React from "react";
import 'App.css';


function WithAngledİmageOnRight() {
  return (
    <section className="stack-y-c h-100vh">
      <div className="wrap">
        <div className="stack-y-l m-bw-y-5xl m-bw-y-none@md stack-x-l@md">
          <div className="m-bw-y-2xl w-50@md z-11">
            <div className="stack-y-l logo">
              <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </div>
            <div className="stack-x-l m-bw-x-lg">
              <a href="javascript:;" className="p-x-sm p-y-xs border border-color-black-alpha-1 border-color-primary@hover radius-xl">
                <span>Anim aute id magna aliqua ad ad non deserunt sunt.</span>
                <b className="color-primary">Read more</b>
                <i className="icon p-l-xs color-primary iconoir-arrow-right"></i>
              </a>
            </div>
            <div className="h1 font-weight-bold color-black">
              Data to enrich your online business
            </div>
            <p className="h6 p-r-xl letter-spacing-xs mute-75">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
              qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
              occaecat fugiat aliqua.
            </p>
            <div className="stack-x-l m-bw-x-xl">
              <a href="javascript:;" className="button">
                <span>Get started</span>
              </a>
              <a href="javascript:;" className="button button-style-link button-color-black">
                <span>Learn more</span>
                <i className="p-l-sm text-md iconoir-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="absolute left-40 bg-color-white w-20 h-100vh z-10 hidden@sm visible@md"
              style={{
                transform:'skewX(-10deg)'
              }}
          />
          <div className="w-100 w-50@md h-50vh h-100vh@md bg-image"
                style={{
                  backgroundImage:'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)'
                }}
          />
        </div>
      </div>
    </section>
  );
}

export default WithAngledİmageOnRight;