import React from 'react';

import 'App.css';
import { FaCheck } from "react-icons/fa";

function ThreeTiers () {
  return (
    <section className='m-t-xl'>
      <div className="wrap">

        <div class="stack-y-c m-bw-y-lg">
          <p class="color-primary">Pricing</p>
          <h1>
            Pricing plans for teams of all sizes
          </h1>
          <p class="text-center text-lg line-height-lg color-black-alpha-3">
            Distinctio et nulla eum soluta et neque labore quibusdam.<b /> 
            Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>

        <div class="space-5xl"></div>

        <div className="row row-gap-md row-gap-none@md">
          <div className="col-12 col-4@md">
            <div className="h-100@md">
              <div className="space-md"></div>
              <div className="stack-y-j h-100 p-lg border border-color-black-alpha-1 radius-xl radius-tl-xl@md radius-bl-xl@md radius-tr-none@md radius-br-none@md">
                <div className="w-100 m-bw-y-lg">
                  <p class="h6">
                    Freelancer
                  </p>
                  <p class="text-sm truncate color-black-alpha-3">
                    The essentials to provide your best work for clients.
                  </p>
                  <p>
                    <span className='h1'>
                      $24
                    </span>
                    <span class="text-sm color-black-alpha-3">
                      /month
                    </span>
                  </p>
                  <ul className='m-bw-y-md'>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          5 products
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Up to 1,000 subscribers
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Basic analytics
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          48-hour support response time
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <button className='button button-style-outline button-block m-t-xl'>
                  Buy plan
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-4@md">
            <div className="h-100@md">
              <div className="space-md border-t border-l border-r border-color-black-alpha-1 radius-tl-xl radius-tr-xl radius-tl-xl@md radius-tr-xl@md"></div>
              <div className="stack-y-j h-100 p-lg border-l border-r border-b border-l-none@md border-r-none@md radius-bl-xl radius-br-xl radius-bl-none@md radius-br-none@md border-color-black-alpha-1">
                <div className="w-100 m-bw-y-lg">
                  <div className="stack-x-j">
                    <div class="h6">
                      Startup
                    </div>
                    <span className="badge text-xs bg-color-primary">
                      Most popular
                    </span>
                  </div>
                  <p class="text-sm truncate color-black-alpha-3">
                    A plan that scales with your rapidly growing business.
                  </p>
                  <p>
                    <span className='h1'>
                      $32
                    </span>
                    <span class="text-xs color-black-alpha-3">
                      /month
                    </span>
                  </p>
                  <ul className='m-bw-y-md'>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          5 products
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Up to 1,000 subscribers
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Basic analytics
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          24-hour support response time
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Marketing automations
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <button className='button button-block m-t-xl'>
                  Buy plan
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-4@md">
            <div className="h-100@md">
              <div className="space-md"></div>
              <div className="stack-y-j h-100 p-lg border border-color-black-alpha-1 radius-xl radius-tr-xl radius-br-xl radius-tl-none@md radius-bl-none@md">
                <div className="w-100 m-bw-y-lg">
                  <p class="h6">
                    Enterprise
                  </p>
                  <p class="text-sm truncate color-black-alpha-3">
                    Dedicated support and infrastructure for your company.
                  </p>
                  <p>
                    <span className='h1'>
                      $48
                    </span>
                    <span class="text-sm color-black-alpha-3">
                      /month
                    </span>
                  </p>
                  <ul className='m-bw-y-md'>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          5 products
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Up to 1,000 subscribers
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Basic analytics
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          1-hour support response time
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Marketing automations
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="m-bw-x-md">
                        <FaCheck />
                        <span class="color-black-alpha-3">
                          Unlimited subscribers
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <button className='button button-style-outline button-block m-t-xl'>
                  Buy plan
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ThreeTiers ;