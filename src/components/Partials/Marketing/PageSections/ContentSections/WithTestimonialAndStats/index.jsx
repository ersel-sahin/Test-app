import React from 'react';

import 'App.css';

function WithTestimonialAndStats () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="row row-gap-xl">
          <div className="col-12 col-4@md">
            <div className="stack-y-b h-50vh w-100 m-b-xl m-bw-y-xl bg-image color-white radius-xl"
              style={
                {
                backgroundImage:'url(https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80)',
                }
              }
            >
              <div className="stack-y-l m-bw-y-lg p-sm bg-color-black-alpha-3 radius-xl">
                <div className="img">
                  <img src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
                </div>
                <div className="text-lg font-weight-bold line-height-md letter-spacing-sm">
                  “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor.”
                </div>
                <div className="p-b-sm text-sm m-bw-x-xs">
                  <span className="font-weight-bold">
                  Jane Cooper,
                  </span>
                  <span className="mute-75">
                    CEO ar Workcation
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-8@md">
            <div className="m-bw-y-lg line-height-lg">
              <div className="m-bw-y-sm">
                <div className="font-weight-bold color-primary">
                  Company values
                </div>
                <div className="h4 font-weight-bold">
                On a mission to empower remote teams
                </div>
              </div>
              <div className="text-lg letter-spacing-sm mute-75">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
              </div>
              <div className="text-lg letter-spacing-sm mute-75">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </div>
              <div className="text-lg letter-spacing-sm mute-75">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </div>
              <hr className="border border-color-black-alpha-1"/>
              <div className="row row-gap-lg">
                <div className="col-6 col-3@md">
                  <div className="stack-y-l m-bw-y-md">
                    <strong className="mute-75">
                      Founded
                    </strong>
                    <strong className="h3">
                      2021
                    </strong>
                  </div>
                </div>
                <div className="col-6 col-3@md">
                  <div className="stack-y-l m-bw-y-md">
                    <strong className="mute-75">
                      Employees
                    </strong>
                    <strong className="h3">
                      37
                    </strong>
                  </div>
                </div>
                <div className="col-6 col-3@md">
                  <div className="stack-y-l m-bw-y-md">
                    <strong className="mute-75">
                      Countries
                    </strong>
                    <strong className="h3">
                      12
                    </strong>
                  </div>
                </div>
                <div className="col-6 col-3@md">
                  <div className="stack-y-l m-bw-y-md">
                    <strong className="mute-75">
                      Raised
                    </strong>
                    <strong className="h3">
                      $25M
                    </strong>
                  </div>
                </div>
              </div>
              <div className="color-primary font-weight-bold">
                <a href="javascript">
                  <span className="p-r-sm">
                    Learn more about our company
                  </span>
                  <i className="icon iconoir-arrow-right text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithTestimonialAndStats;