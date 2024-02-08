import React from 'react';

import 'App.css';

function OffsetWithSupportingText () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-l stack-x-t@md m-bw-x-xl@md">
          <div className="stack-y-l m-bw-y-md p-b-xl p-b-xl-none@md w-100 w-50@md">
            <div className="h4 font-weight-bold letter-spacing-xs">
              Frequently asked questions
            </div>
            <div className="letter-spacing-xs mute-75">
              Can’t find the answer you’re looking for? Reach out to our&nbsp;<br />
              <a href="javasciript" className="color-primary">
                customer support
              </a>&nbsp;
               team.
            </div>
          </div>
          <div className="stack-y-l m-bw-y-xl w-100 w-50@md line-height-lg">
            <div className="stack-y-l m-bw-y-md p-t-xs">
              <div className="h6 font-weight-bold">
                How do you make holy water?
              </div>
              <div className="text-md letter-spacing-xs mute-75">
                You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </div>
            </div>
            <div className="stack-y-l m-bw-y-md">
              <div className="h6 font-weight-bold">
                What's the best thing about Switzerland?
              </div>
              <div className="text-md letter-spacing-xs mute-75">
                I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat
              </div>
            </div>
            <div className="stack-y-l m-bw-y-md">
              <div className="h6 font-weight-bold">
                What do you call someone with no body and no nose?
              </div>
              <div className="text-md letter-spacing-xs mute-75">
              Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </div>
            </div>
            <div className="stack-y-l m-bw-y-md">
              <div className="h6 font-weight-bold">
                Why do you never see elephants hiding in trees?
              </div>
              <div className="text-md letter-spacing-xs mute-75">
                Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>
  )
}
export default OffsetWithSupportingText;
