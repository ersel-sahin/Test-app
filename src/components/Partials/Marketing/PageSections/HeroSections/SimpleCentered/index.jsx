import React from "react";

import 'App.css';

function SimpleCentered() {
  return (
    <section className="h-100vh stack-y-c bg-image">
      <div className="wrap">
        <div className="stack-x-c p-y-xl">
          <a href="#" className="stack-x-c m-bw-x-sm p-x-md p-y-sm text-sm border border-color-black-alpha-1 border-color-primary-alpha-3@hover radius-xl">
            <span className="mute">
              Announcing our next round of funding.
            </span>
            <span className="stack-x-l m-bw-x-sm color-primary">
              <span>
                Read more
              </span>
              <i className="icon iconoir-arrow-right"></i>
            </span>
          </a>
        </div>
        <div className="stack-y-c m-bw-y-xl">
          <h1 className="text-center">
            Data to enrich your<br /> online business
          </h1>
          <p className="text-center text-lg mute">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui<br />  lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="stack-x-c p-t-xl m-bw-x-xl">
          <div className="button">
            Get Started
          </div>
          <div className="button button-style-plain">
            <span>Learn more</span>
            <i className="icon iconoir-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleCentered;