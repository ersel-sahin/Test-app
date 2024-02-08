import React from 'react';

import 'App.css';

function LeftAligned () {
  return (
    <section className="m-y-5xl">
      <div className="wrap-mini">
        <div className="stack-y-l">
          <div className="stack-y-l m-bw-y-sm">
            <div className="h6 font-weight-bold">
              Applicant Information
            </div>
            <div className="letter-spacing-sm mute-75">
              Personal details and application. 
            </div>
          </div>
          <div className="space-md"></div>
          <div className="row row-gap-md">
            <div className="col-12">
              <hr className="w-100 border border-color-black-alpha-1"/>
            </div>
            <div className="col-12 col-4@md">
              <div className="font-weight-bold">
                Full name
              </div>
            </div>
            <div className="col-12 col-8@md">
              <div className="mute-75">
                Margot Foster
              </div>
            </div>
            <div className="col-12">
              <hr className="w-100 border border-color-black-alpha-1"/>
            </div>
            <div className="col-12 col-4@md">
              <div className="font-weight-bold">
                Application for
              </div>
            </div>
            <div className="col-12 col-8@md">
              <div className="mute-75">
                Backend Developer
              </div>
            </div>
            <div className="col-12">
              <hr className="w-100 border border-color-black-alpha-1"/>
            </div>
            <div className="col-12 col-4@md">
              <div className="font-weight-bold">
                Email address
              </div>
            </div>
            <div className="col-12 col-8@md">
              <div className="mute-75">
                margotfoster@example.com
              </div>
            </div>
            <div className="col-12">
              <hr className="w-100 border border-color-black-alpha-1"/>
            </div>
            <div className="col-12 col-4@md">
              <div className="font-weight-bold">
                Salary expectation
              </div>
            </div>
            <div className="col-12 col-8@md">
              <div className="mute-75">
                $120,000
              </div>
            </div>
            <div className="col-12">
              <hr className="w-100 border border-color-black-alpha-1"/>
            </div>
            <div className="col-12 col-4@md">
              <div className="font-weight-bold">
                About
              </div>
            </div>
            <div className="col-12 col-8@md">
              <div className="mute-75 letter-spacing-sm">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </div>
            </div>
            <div className="col-12">
              <hr className="w-100 border border-color-black-alpha-1"/>
            </div>
            <div className="col-12 col-4@md">
              <div className="font-weight-bold">
                About
              </div>
            </div>
            <div className="col-12 col-8@md">
                <div className="p-y-md border border-color-black-alpha-1 radius-md">
                  <div className="stack-x-j p-x-md">
                    <div className="stack-x-l m-bw-x-sm">
                      <i className="icon iconoir-paste-clipboard text-xl"></i>
                      <div className="font-weight-bold">
                        resume_back_end_developer.pdf
                      </div>
                      <div className="mute-75">
                        2.4mb
                      </div>
                    </div>
                    <div className="stack-x-r">
                      <div className="button button-style-link">
                        Download
                      </div>
                    </div>
                  </div>
                  <hr className="w-100"/>
                  <div className="stack-x-j p-x-md">
                    <div className="stack-x-l m-bw-x-sm">
                      <i className="icon iconoir-paste-clipboard text-xl"></i>
                      <div className="font-weight-bold">
                        coverletter_back_end_developer.pdf
                      </div>
                      <div className="mute-75">
                        2.4mb
                      </div>
                    </div>
                    <div className="stack-x-r">
                      <div className="button button-style-link">
                        Download
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LeftAligned;