import React from "react";

import 'App.css';

function WithButton() {
  return (
    <div className="preheader-container">
      <div className="preheader">
        <div className="p-sm bg-color-black-alpha-3">
          <div className="wrap">
            <div className="stack-x-j">
              <div className="stack-x-l m-bw-x-lg">
                <div className="font-weight-bold">
                  GeneriCon 2023
                </div>
                <span>
                  •
                </span>
                <div className="mute-50">
                  Join us in Denver from June 7 – 9 to see what’s coming next. 
                </div>
                <a href="javascript:;" className="button button-size-sm button-color-black-alpha-1 radius-xl">
                  <span className="color-black-alpha-7">
                    Register Now
                  </span>
                  <i className="p-l-sm iconoir-arrow-right text-lg color-black-alpha-7"></i>
                </a>
              </div>
              <a href="javascript:;" className="stack-x-r h5">
                <i className="iconoir-xmark"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithButton;