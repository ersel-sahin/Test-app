import React from 'react';

import 'App.css';

function Cards ({
  name,
  description,
  img,
  ...props
}) {

  return (
    <div className="col-12 col-6@md">
      <div className="stack-x-l m-bw-x-lg">
      <div className="w-20 w-30@md">
        <img src={img} alt="img" className="radius-full" />
      </div>
      <div className="stack-y-l">
        <a href="javascirpt:;">
          <strong>
            {name}
          </strong>
        </a>
        <div className="text-sm font-weight-bold color-primary mute-75">
          {description}
        </div>
      </div>
      </div>
    </div>
  )
}

function WithSmallİmages() {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
       <div className="row row-gap-xl">
        <div className="col-12 col-4@lg">
          <div className="stack-y-l m-bw-y-md">
            <div className="h5 font-weight-bold">
              Meet our leadership
            </div>
            <div className="text-lg line-height-lg letter-spacing-xs mute-75">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.
            </div>
          </div>
        </div>  
        <div className="col-12 col-8@lg">
          <div className="row row-gap-3xl">
            <Cards
              img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Michael Foster"
              description="Co-Founder / CTO"
            />
            <Cards
              img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Leslie Alexander"
              description="Business Relations"
            />
            <Cards
              img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Courtney Henry"
              description="Designer"
            />
            <Cards
              img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Dries Vincent"
              description="Dries Vincent"
            />
            <Cards
              img="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Lindsay Walton"
              description="Front-end Developer"
            />
            <Cards
              img="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Tom Cook"
              description="Director of Product"
            />
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}

export default WithSmallİmages;