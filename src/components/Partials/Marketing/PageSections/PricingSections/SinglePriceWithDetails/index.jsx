import React from 'react';

import 'App.css';

function SinglePriceWithDetails () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-c p-t-xl m-bw-y-lg">
          <h1>
            Simple no-tricks pricing
          </h1>
          <p className="text-center text-lg line-height-lg color-black-alpha-3">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe<br /> et quasi
            iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="space-5xl"></div>
        <div className="p-lg border border-color-black-alpha-1 radius-lg">
          <div className="row row-gap-lg">
            <div className="col-12 col-8@md">
              <div className="m-bw-y-lg">
                <div className="m-bw-y-md">
                  <div className="h4">
                    Lifetime membership
                  </div>
                  <div className="color-black-alpha-3">
                    Lorem ipsum dolor sit amet consect etur adipisicing elit.Itaque<br/> 
                    amet indis perferendis blanditiis repellendus etur quidem assumenda.
                  </div>
                </div>
                  <div className="stack-x-l">
                    <div className="white-space-nowrap color-primary p-r-lg">
                      What’s included
                    </div>
                    <hr className="w-100 m-r-xl border border-color-primary" />
                  </div>
                  <div className="row row-gap-lg">
                    <div className="col-12 col-6@md stack-x-l m-bw-x-sm">
                      <i className="icon iconoir-check color-primary"></i>
                      <p className="color-black-alpha-3">
                        Private forum access
                      </p>
                    </div>
                    <div className="col-12 col-6@md stack-x-l m-bw-x-sm">
                      <i className="icon iconoir-check color-primary"></i>
                      <p className="color-black-alpha-3">
                        Entry to annual conference
                      </p>
                    </div>
                    <div className="col-12 col-6@md stack-x-l m-bw-x-sm">
                      <i className="icon iconoir-check color-primary"></i>
                      <p className="color-black-alpha-3">
                        Member resources
                      </p>
                    </div>
                    <div className="col-12 col-6@md stack-x-l m-bw-x-sm">
                      <i className="icon iconoir-check color-primary"></i>
                      <p className="color-black-alpha-3">
                        Official member t-shirt
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-12 col-4@md">
              <div className="stack-y-c p-xl m-bw-y-xl border border-color-gray-alpha-1 bg-color-gray-alpha-1 radius-lg">
                <div className="text-lg color-black-alpha-4">
                  Pay once, own it forever
                </div>
                <div className="h1">
                  $349 
                  <span className="text-sm color-black-alpha-3">
                    USD
                  </span>
                </div>
                <div className="button button-size-xl">
                  Get access
                </div>
                <div className="text-center text-xs color-black-alpha-3">
                  Invoices and receipts available for easy<br /> 
                  company reimbursement
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>

    </section>
  );
}

export default SinglePriceWithDetails ;