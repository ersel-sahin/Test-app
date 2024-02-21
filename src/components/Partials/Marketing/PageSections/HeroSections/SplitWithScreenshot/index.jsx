import React from "react";
import 'App.css';


function SplitWithScreenshot() {
  return (
    <section className="stack-y-c h-100vh bg-image color-white"
      style={{
        backgroundImage:'url(https://wallpaperset.com/w/full/2/8/0/521071.jpg)',
      }}
    >
      <div className="wrap">
        <div className="row row-gap-xl">
          <div className="col-12 col-7@md">
            <div className="m-bw-y-2xl">
              <div className="stack-y-l logo">
                <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </div>
              <div className="stack-x-l m-bw-x-lg">
                <a href="javascript:;" className="p-x-sm p-y-xs border border-color-gray-alpha-1 bg-color-primary-alpha-2 color-primary radius-xl">
                  <b>What's New</b>
                </a>
                <a href="javascript:;" className="button button-style-link button-color-white">
                  <span>Just shipped v1.0</span>
                  <i className="icon iconoir-nav-arrow-right"></i>
                </a>
              </div>
              <div className="display-6 font-weight-bold">
                Deploy to the cloud<br/>
                with confidence
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
                <a href="javascript:;" className="button button-style-link button-color-white">
                  <span>Learn more</span>
                  <i className="p-l-sm text-md iconoir-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-5@md">
            <div className="w-60vw@md p-md bg-color-gray-alpha-3 radius-lg">
              <img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="" className="radius-md"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplitWithScreenshot;