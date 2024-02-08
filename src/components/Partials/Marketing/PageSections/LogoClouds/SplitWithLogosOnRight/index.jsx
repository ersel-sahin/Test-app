import React from 'react';

import 'App.css';

function SplitWithLogosOnRight() {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
       <div className="row row-gap-xl">
        <div className="col-12 col-6@md">
          <div className="stack-y-l m-bw-y-lg p-t-xs">
            <div className="h5 font-weight-bold">
              Trusted by the most innovative teams
            </div>
            <div className="line-height-lg mute-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
            </div>
            <div className="stack-x-l m-bw-x-lg">
              <div className="button">
                Create account
              </div>
              <div className="button button-style-link button-color-black">
                Contact us
                <i className="p-l-sm icon iconoir-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>  
        <div className="col-12 col-6@md">
          <div className="row row-gap-xl">
            <div className="col-6 col-6@md">
              <div className="w-50">
                <img src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="img" className="radius-full" />
              </div>
            </div>
            <div className="col-6 col-6@md">
              <div className="w-50 p-t-sm">
                <img src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg" alt="img" className="radius-full" />
              </div>
            </div>
            <div className="col-6 col-6@md">
              <div className="w-50">
                <img src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg" alt="img" className="radius-full" />
              </div>
            </div>
            <div className="col-6 col-6@md">
              <div className="w-50">
                <img src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg" alt="img" className="radius-full" />
              </div>
            </div>
            <div className="col-6 col-6@md">
              <div className="w-50">
                <img src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg" alt="img" className="radius-full" />
              </div>
            </div>
            <div className="col-6 col-6@md">
              <div className="w-50">
                <img src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg" alt="img" className="radius-full" />
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}

export default SplitWithLogosOnRight;