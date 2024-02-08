import React from 'react';

import 'App.css';

import { FaCheck } from "react-icons/fa";

function ThreeTiersWithDividers () {
  return (
    <section className='m-y-5xl'>
      <div className="wrap">
        <div className="m-bw-y-5xl">
          <div className="stack-y-c m-bw-y-sm">
            <div className="text-center color-primary">
              Pricing
            </div>
            <h1 className="text-center">
              Choose the right plan for you
            </h1>
            <div className="text-center text-lg line-height-lg mute-75">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi<br /> 
              iusto modi velit ut non voluptas in. Explicabo id ut laborum.
            </div>
          </div>
          <div className="
            stack-y-c
            border-bw-y

            stack-x-t@lg
            border-bw-y-none@lg
            border-bw-x@lg

            border-color-gray-alpha-1
          ">
            <div className="w-100 w-33@lg p-y-lg p-y-none@lg p-x-lg@lg">
              <div className="stack-y-l m-bw-y-xl m-bw-y-3xl@lg">
                <div className="m-bw-y-sm">
                  <p className="h6">
                    Basic
                  </p>
                  <p className="">
                    <span className='h1'>
                      $15
                    </span>
                    <span className="text-sm mute-75">
                      / month
                    </span>
                  </p>
                  <p className="text-xs mute-75">
                    $12 per month if paid annually
                  </p>
                </div>
                <div className="button button-block">
                  Buy plan
                </div>
                <div className="m-bw-y-lg">
                  <p>
                    Everything necessary to get started.
                  </p>
                  <ul className="m-bw-y-md">
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        5 products
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Up to 1,000 subscribers
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Basic analytics
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        48-hour support response time
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-100 w-33@lg p-y-lg p-y-none@lg p-x-lg@lg">
              <div className="stack-y-l m-bw-y-xl m-bw-y-3xl@lg">
                <div className="m-bw-y-sm">
                  <p className="h6">
                    Essential
                  </p>
                  <p className="">
                    <span className='h1'>
                      $30
                    </span>
                    <span className="text-sm mute-75">
                      / month
                    </span>
                  </p>
                  <p className="text-xs mute-75">
                    $24 per month if paid annually
                  </p>
                </div>
                <div className="button button-block">
                  Buy plan
                </div>
                <div className="m-bw-y-lg">
                  <p>
                    Everything in Basic, plus essential tools for growing your business.
                  </p>
                  <ul className="m-bw-y-md">
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        25 products
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Up to 1,000 subscribers
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Advanced analytics
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        48-hour support response time
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Marketing automations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-100 w-33@lg p-y-lg p-y-none@lg p-x-lg@lg">
              <div className="stack-y-l m-bw-y-xl m-bw-y-3xl@lg">
                <div className="m-bw-y-sm">
                  <p className="h6">
                    Growth
                  </p>
                  <p className="">
                    <span className='h1'>
                      $60
                    </span>
                    <span className="text-sm mute-75">
                      / month
                    </span>
                  </p>
                  <p className="text-xs mute-75">
                    $48 per month if paid annually
                  </p>
                </div>
                <div className="button button-block">
                  Buy plan
                </div>
                <div className="m-bw-y-lg">
                  <p>
                    Everything in Essential, plus collaboration tools and deeper insights.
                  </p>
                  <ul className="m-bw-y-md">
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Unlimited products
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Unlimited subscribers
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Advanced analytics
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        1-hour, dedicated support response time
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Marketing automations
                      </span>
                    </li>
                    <li className='m-bw-x-md'>
                      <FaCheck />
                      <span>
                        Custom reporting tools
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>

  );
}

export default ThreeTiersWithDividers ;