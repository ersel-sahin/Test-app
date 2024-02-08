import React from 'react';

import 'App.css';

function WithActionsAndTabs () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-l m-bw-y-lg stack-x-j@md">
          <div className="stack-y-l m-bw-y-sm">
            <div className="h3 font-weight-bold color-black">
              Candidates
            </div>
            <nav className="nav hidden@sm visible@md">
              <ul>
                <li>
                  <a href="javascript">
                    Applied
                  </a>
                </li>
                <li>
                  <a href="javascript">
                    Phone Screening
                  </a>
                </li>
                <li>
                  <a href="javascript">
                    Archive
                  </a>
                </li>
                <li>
                  <a href="javascript">
                  Offer
                  </a>
                </li>
                <li>
                  <a href="javascript">
                    Hired
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="stack-x-l m-bw-x-md">
            <a href="javascript" className="button button-style-outline button-color-gray">
              <span className="color-black">
                Share
              </span>
            </a>
            <a href="javascript" className="button">
              Create
            </a>
          </div>
          <div className="hidden@md visible@sm w-100">
            <div class="input-wrap">
              <select name="category" class="input">
                <option value="">Applied</option>
                <option value="">Phone Screening</option>
                <option value="">Archive</option>
                <option value="">Offer</option>
                <option value="">Hired</option>
              </select>
              <div class="input-wrap-content">
                  <i class="icon iconoir-nav-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-100 hidden@sm visible@md border border-color-black-alpha-2"/>
      </div>
    </section>
  )
}
export default WithActionsAndTabs;