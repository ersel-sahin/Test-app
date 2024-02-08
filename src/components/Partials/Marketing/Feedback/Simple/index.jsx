import React from 'react';

import 'App.css';

function WithTestimonialAndStats () {
  return (
    <section className="stack-x-c h-100vh">
      <div className="wrap">
        <div className="stack-y-c m-bw-y-lg">
          <div className="h4 font-weight-bold color-primary">
            404
          </div>
          <div className="display-3 font-weight-bold">
            Page not found
          </div>
          <div className="h6 letter-spacing-sm mute-75">
            Sorry, we couldn’t find the page you’re looking for.
          </div>
          <div className="space-sm"></div>
          <div className="stack-x-c m-bw-x-xl">
            <div className="button">
              Go back home
            </div>
            <div className="button button-style-link button-color-black">
              Contact support
              <span className="text-md"><i className="icon p-l-xs iconoir-arrow-right"></i></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithTestimonialAndStats;
