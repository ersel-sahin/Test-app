import React from 'react';

import 'App.css';

function DarkNavWithWhitePageHeader () {
  return (
    <section className="">
      <header className="header-container">
        <div className="header">
          <div className="wrap p-lg bg-color-black color-white">
            <div className="stack-x-j">
              <div className="stack-x-l">
                <div className="logo p-r-xl">
                  <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="logo" />
                </div>
                <nav className="nav">
                  <ul>
                    <li>
                      <a href="javascript">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="javascript">
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="javascript">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="javascript">
                        Calendar
                      </a>
                      </li>
                    <li>
                      <a href="javascript">
                        Reports
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="stack-x-l m-bw-x-lg">
                <div className="h6 p-t-sm">
                  <a href="javascript">
                    <i className="iconoir-bell"></i>
                  </a>
                </div>
                <div className="h3 p-t-sm">
                  <a href="javascript">
                    <i className="iconoir-profile-circle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap p-lg bg-color-light-alpha-9">
            <div className="stack-x-l">
              <div className="h1 font-weight-bold color-black">
                Dashboard
              </div>
            </div>
          </div>
          <div className="wrap h-50vh p-lg bg-color-gray-alpha-3">
            <div className="w-100 h-100 border border-style-dashed radius-xl"></div>
          </div>
        </div>
      </header>
    </section>
  )
}
export default DarkNavWithWhitePageHeader;