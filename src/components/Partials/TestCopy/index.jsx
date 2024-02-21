import React from "react";

import 'App.css';

function PriceItem({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  buttonClassName,
  ...props
}) {
  return (
    <div className="stack-y-j h-100 p-xl m-bw-y-xl border border-color-black-alpha-1 radius-xl shadow shadow-size-sm">
      <div className="m-bw-y-xl">
        <div className="m-bw-y-sm">
          <div className="color-primary">
            {title}
          </div>
          <div className="h1">
            {price} <span className="text-xs mute-75">/month</span>
          </div>
          <p className="mute-75">
            {description}
          </p>
        </div>
        <div className="stack-y-l w-100 m-bw-y-sm">
          {features.map((feature, index) => (
            <div key={index} className="stack-x-l m-bw-x-md">
              <i className="iconoir-check h5 color-primary"></i>
              <div className="text-xs">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-100">
        <button className="button button-style-outline button-block">
          Get started today
        </button>
      </div>
    </div>
  )
}

function Test() {
  return (
    <section>
      <div className="wrap-mini">
        <div className="stack-y-c m-bw-y-xl">
          <div className="m-bw-y-md text-center">
            <p className="color-primary">
              Pricing
            </p>
            <div className="h1">
              The right price for you, whoever you are
            </div>
            <p className="text-lg line-height-lg mute-75">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quaerat assumen xolor similique hic <br />
              accusamus dolorum quasi atque aliquid fuga ullam, et blanditiis quas commodi.
            </p>
          </div>
          <div className="row row-gap-xl">
            <div className="col-6">
              <PriceItem
                title="Hobby"
                price="$49"
                description="Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae."
                features={[
                  '5 products',
                  'Up to 1,000 subscribers',
                  'Basic analytics',
                  '48-hour support response time',
                ]}
                buttonText="Get started today"
                buttonLink="#"
              />
            </div>
            <div className="col-6">
              <PriceItem
                title="Team"
                price="$79"
                description="Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi."
                features={[
                  'Unlimited products',
                  'Unlimited subscribers',
                  'Advanced analytics',
                  '1-hour, dedicated support response time',
                  'Marketing automations',
                ]}
                buttonText="Get started today"
                buttonLink="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Test;