import React from 'react';

import 'App.css';

function WithAvatarAndActions () {
  
  return (
    <section className="m-y-2xl">
      <div className="wrap-mini">
        <div className="m-bw-y-lg">
          <div className="stack-y-l m-bw-y-lg m-bw-y-none@md stack-x-j@md">
            <div className="stack-x-l m-bw-x-lg">
              <div className="w-20">
                <img src="" alt="img" className="radius-full" />
              </div>
              <div className="stack-y-l">
                <a href="javascirpt">
                  <strong>
                    Tom Cook
                  </strong>
                  <div className="mute-75">
                    @tom_cook
                  </div>
                </a>
              </div>
            </div>
            <div className="stack-x-r m-bw-x-md">
              <a href="javascript" className="button button-style-outline button-color-gray">
                <i className="icon iconoir-phone-outcome p-r-sm"></i>
                <strong className="color-black">
                  Phone
                </strong>
              </a>
              <a href="javascript" className="button button-style-outline button-color-gray">
                <i className="icon iconoir-mail-solid p-r-sm"></i>
                <strong className="color-black">
                  Email
                </strong>
              </a>
            </div>
          </div>
          <hr className="w-100 border border-color-black-alpha-2"/>
          <div className="stack-x-j">
            <div className="stack-y-l">
              <div className="font-weight-bold color-primary">
                Back End Developer
              </div>
              <div className="h5 m-bw-x-sm">
                <i className="icon iconoir-group mute-75"></i>
                <span className="text-sm mute-75">Back End Developer</span>
              </div>
            </div>
            <div className="stack-y-r">
              <div className="font-weight-bold color-green">
                Full-time
              </div>
              <div className="h5 m-bw-x-sm">
                <i className="icon iconoir-map-pin mute-75"></i>
                <span className="text-sm mute-75">Remote</span>
              </div>
            </div>
          </div>
          <hr className="w-100 border border-color-black-alpha-2"/>
          <div className="stack-x-j">
            <div className="stack-y-l">
              <div className="font-weight-bold color-primary">
                Front End Developer
              </div>
              <div className="h5 m-bw-x-sm">
                <i className="icon iconoir-group mute-75"></i>
                <span className="text-sm mute-75">Engineering</span>
              </div>
            </div>
            <div className="stack-y-r">
              <div className="font-weight-bold color-green">
                Full-time
              </div>
              <div className="h5 m-bw-x-sm">
                <i className="icon iconoir-map-pin mute-75"></i>
                <span className="text-sm mute-75">Remote</span>
              </div>
            </div>
          </div>
          <hr className="w-100 border border-color-black-alpha-2"/>
          <div className="stack-x-j">
            <div className="stack-y-l">
              <div className="font-weight-bold color-primary">
                User Interface Designer
              </div>
              <div className="h5 m-bw-x-sm">
                <i className="icon iconoir-group mute-75"></i>
                <span className="text-sm mute-75">Desing</span>
              </div>
            </div>
            <div className="stack-y-r">
              <div className="font-weight-bold color-green">
                Full-time
              </div>
              <div className="h5 m-bw-x-sm">
                <i className="icon iconoir-map-pin mute-75"></i>
                <span className="text-sm mute-75">Remote</span>
              </div>
            </div>
          </div>
          <hr className="w-100 border border-color-black-alpha-2"/>
        </div>
      </div>
    </section>
  )
}
export default WithAvatarAndActions;