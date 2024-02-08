import React from 'react';

import 'App.css';

function SideBySide () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-l stack-x-l@md m-bw-x-lg@md">
          <div className="m-bw-y-lg">
            <div className="w-20">
              <img src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="" />
            </div>
            <div className="text-lg">
              “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
            </div>
            <div className="stack-x-l m-bw-x-md">
              <div className="w-10">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="radius-full"/>
              </div>
              <div className="stack-y-l m-bw-y-sm">
                <strong>
                  Judith Black
                </strong>
                <span>
                  CEO of Tuple
                </span>
              </div>
            </div>
          </div>
          <div className="w-100 m-y-lg visible@sm hidden@md">
            <hr/>
          </div>
          <div style={{width:'1px',height:'250px'}} className="m-x-lg h-100 bg-color-gray-alpha-2 hidden@sm visible@md"></div>
          <div className="m-bw-y-lg">
            <div className="w-20">
              <img src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="" />
            </div>
            <div className="text-lg">
              “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
            </div>
            <div className="stack-x-l m-bw-x-md">
              <div className="w-10">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="radius-full"/>
              </div>
              <div className="stack-y-l m-bw-y-sm">
                <strong>
                  Judith Black
                </strong>
                <span>
                  CEO of Tuple
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SideBySide;