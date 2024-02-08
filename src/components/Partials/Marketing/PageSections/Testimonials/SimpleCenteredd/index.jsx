import React from 'react';

import 'App.css';

function SimpleGrid () {
  return (
    <section className="stack-y-c h-100vh">
      <div className="wrap">
        <div className="absolute bottom-30 w-100 h-70 bg-color-purple mask-skew-yr"></div>
        <div className="absolute bottom-30 w-100 h-70 bg-color-yellow mask-skew-yl"></div>
        <div className="stack-y-c">
          <div className="stack-y-c m-bw-y-xl p-xl bg-img">
            <div className="img">
              <img src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="workcation" />
            </div>
            <div className="h5 text-center font-weight-bold">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </div>
          </div>
          
          <div className="space-lg"></div>
          <div className="stack-y-c m-bw-y-lg">
            <div className="w-20">
              <div className="ratio-100 bg-image radius-full" 
                style=
                {
                  {
                  backgroundImage:'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)',
                }
              }
              >
              </div>
            </div>
            <div className="stack-x-c m-bw-x-md">
              <div className="text-lg font-weight-bold">
                Judith Black • CEO of Workcation
              </div>
            </div>
          </div>
        </div>    
      </div>
    </section>
  )
}
export default SimpleGrid;