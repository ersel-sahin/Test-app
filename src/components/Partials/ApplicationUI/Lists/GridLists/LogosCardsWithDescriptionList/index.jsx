import React from 'react';

import Popover from 'components/Core/Popover/index.jsx';

import 'App.css';

function LogosCardsWithDescriptionList () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="row row-gap-xl">
          <div className="col-12 col-4@md">
            <div className="stack-y-l border border-color-black-alpha-1 radius-xl">
              <div className="stack-x-j w-100 p-lg bg-color-gray-alpha-1 border-b border-color-black-alpha-1 radius-t-xl">
                <div className="stack-x-l m-bw-x-md">
                  <div className="p-xs border border-color-black-alpha-1 bg-color-white radius-xl">
                    <img src="https://tailwindui.com/img/logos/48x48/tuple.svg" alt="" />
                  </div>
                  <strong>
                    Tuple
                  </strong>
                </div>
                <div>
                  <Popover
                    handle={(
                      <div
                        className="p-sm h6 mute"
                      >
                        •••
                      </div>
                    )}
                    items={[
                      {
                        label: 'View',
                        href: '#'
                      },
                      {
                        label: 'Edit',
                        href: '#'
                      },
                      {
                        label: 'Delete',
                        href: '#'
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="stack-y-l w-100 p-lg">
                <div className="stack-x-j w-100">
                  <span className="mute">
                    Last invoice
                  </span>
                  <span>
                    December 12, 2022
                  </span>
                </div>
                <hr className="w-100"/>
                <div className="stack-x-j w-100">
                  <span className="mute">
                    Amount
                  </span>
                  <span>
                    <strong>
                      $2,000.00
                    </strong>
                    <span className="text-xs m-l-md p-xs font-weight-bold color-red border border-color-red-alpha-2 bg-color-red-alpha-1 radius-sm">
                      Overdue
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-4@md">
            <div className="stack-y-l border border-color-black-alpha-1 radius-xl">
              <div className="stack-x-j w-100 p-lg bg-color-gray-alpha-1 border-b border-color-black-alpha-1 radius-t-xl">
                <div className="stack-x-l m-bw-x-md">
                  <div className="p-xs border border-color-black-alpha-1 bg-color-white radius-xl">
                    <img src="https://tailwindui.com/img/logos/48x48/savvycal.svg" alt="" />
                  </div>
                  <strong>
                    SavvyCal
                  </strong>
                </div>
                <div>
                  <Popover
                    handle={(
                      <div
                        className="p-sm h6 mute"
                      >
                        •••
                      </div>
                    )}
                    items={[
                      {
                        label: 'View',
                        href: '#'
                      },
                      {
                        label: 'Edit',
                        href: '#'
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="stack-y-l w-100 p-lg">
                <div className="stack-x-j w-100">
                  <span className="mute">
                    Last invoice
                  </span>
                  <span>
                    Janury 12, 2022
                  </span>
                </div>
                <hr className="w-100"/>
                <div className="stack-x-j w-100">
                  <span className="mute">
                    Amount
                  </span>
                  <span>
                    <strong>
                      $14,000.00
                    </strong>
                    <span className="text-xs m-l-md p-xs font-weight-bold color-green border border-color-green-alpha-3 bg-color-green-alpha-1 radius-sm">
                      Paid
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-4@md">
            <div className="stack-y-l border border-color-black-alpha-1 radius-xl">
              <div className="stack-x-j w-100 p-lg bg-color-gray-alpha-1 border-b border-color-black-alpha-1 radius-t-xl">
                <div className="stack-x-l m-bw-x-md">
                  <div className="p-xs border border-color-black-alpha-1 bg-color-white radius-xl">
                    <img src="https://tailwindui.com/img/logos/48x48/reform.svg" alt="" />
                  </div>
                  <strong>
                    Tuple
                  </strong>
                </div>
                <div>
                  <Popover
                    handle={(
                      <div
                        className="p-sm h6 mute"
                      >
                        •••
                      </div>
                    )}
                    items={[
                      {
                        label: 'View',
                        href: '#'
                      },
                      {
                        label: 'Edit',
                        href: '#'
                      },
                    ]}
                  >
                    <div
                      className="p-sm h6 mute"
                    >
                      •••
                    </div>
                  </Popover>
                </div>
              </div>
              <div className="stack-y-l w-100 p-lg">
                <div className="stack-x-j w-100">
                  <span className="mute">
                    Last invoice
                  </span>
                  <span>
                    Janury 12, 2024
                  </span>
                </div>
                <hr className="w-100"/>
                <div className="stack-x-j w-100">
                  <span className="mute">
                    Amount
                  </span>
                  <span>
                    <strong>
                      $7,400.00
                    </strong>
                    <span className="text-xs m-l-md p-xs font-weight-bold color-green border border-color-green-alpha-2 bg-color-green-alpha-1 radius-sm">
                      Paid
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LogosCardsWithDescriptionList;