import React from 'react';

import 'App.css';

function BrandSidebarWithHeader () {
  return (
    <section className="h-100vh">
          <div className="stack-x-l">
            <div className="stack-y-jl w-20 h-100vh p-lg bg-color-black color-white">
              <div className="stack-y-l m-bw-y-3xl w-100">
                <div className="logo">
                  <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="logo" />
                </div>
                <nav className="stack-y-l w-100">
                  <a href="javascript:" className="p-y-md m-bw-x-md">
                    <i className="icon iconoir-home text-xl"></i>
                    <span>Dashboard</span>
                  </a>
                  <a href="javascript:" className="p-y-md m-bw-x-md">
                    <i className="icon iconoir-group text-xl"></i>
                    <span>Team</span>
                  </a>
                  <a href="javascript:" className="p-y-md m-bw-x-md">
                    <i className="icon iconoir-folder text-xl"></i>
                    <span>Projects</span>
                  </a>
                  <a href="javascript:" className="p-y-md m-bw-x-md">
                    <i className="icon iconoir-calendar text-xl"></i>
                    <span>Calendar</span>
                  </a>
                  <a href="javascript:" className="p-y-md m-bw-x-md">
                    <i className="icon iconoir-submit-document text-xl"></i>
                    <span>Reports</span>
                  </a>
                </nav>
                <div className="stack-y-l m-bw-y-md">
                  <div className="text-sm letter-spacing-sm">
                    Your teams
                  </div>
                  <div className="stack-y-l w-100">
                    <a href="javascript:" className="stack-x-l p-y-md m-bw-x-md">
                      <span className="p-y-xs p-x-sm bg-color-gray-alpha-2 radius-lg">H</span>
                      <span>Heroicons</span>
                    </a>
                    <a href="javascript:" className="stack-x-l p-y-md m-bw-x-md">
                      <div className="p-y-xs p-x-sm bg-color-gray-alpha-2 radius-lg">T</div>
                      <span>Tailwind Labs</span>
                    </a>
                    <a href="javascript:" className="stack-x-l p-y-md m-bw-x-md">
                      <div className="p-y-xs p-x-sm bg-color-gray-alpha-2 radius-lg">W</div>
                      <span>Workcation</span>
                    </a>
                  </div>
                </div>
              </div>
              <a href="javascript:" className="stack-x-l p-y-md m-bw-x-md">
                <i className="text-xl icon iconoir-settings"></i>
                <span>Settings</span>
              </a>
            </div>
            <div className="w-80 h-100vh border border-color-black-alpha-2">
              <div className="stack-x-c p-x-xl h-10 shadow">
                <div className="stack-x-j h-10 w-100">
                  <div className="stack-x-l p-x-md m-bw-x-md w-100">
                    <label for="search">
                      <i className="icon iconoir-search text-xl"></i>
                    </label>
                    <input type="text" id="search" name="style" placeholder="Search..." class="input input-style-underline input-color-white w-50" />
                  </div>
                  <div className="stack-x-c m-bw-x-lg w-20 mute-75">
                    <div className="h6">
                      <a href="javascript:">
                        <i className="iconoir-bell"></i>
                      </a>
                    </div>
                    <div className="h-5vmin border-l border-color-black-alpha-1"></div>
                    <div className="stack-x-c m-bw-x-xs text-center">
                      <a href="javascript:" className="h6">
                        <i className="iconoir-profile-circle"></i>
                      </a>
                      <a href="javascript:" className="text-xs p-l-sm">
                        Tom Cook
                      </a>
                      <a href="javascript:" className="h6">
                        <i className="icon iconoir-nav-arrow-down"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-90 p-lg bg-color-gray-alpha-3">
                <div className="w-100 h-100 border border-style-dashed radius-xl"></div>
              </div>
            </div>
          </div>
    </section>
  )
}
export default BrandSidebarWithHeader;