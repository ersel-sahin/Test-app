import React from 'react';

import 'App.css';

function WithStartingPoints () {
  return (
    <section className="m-y-2xl">
      <div className="wrap">
        <div className="stack-y-l m-bw-y-md">
          <div className="m-bw-y-sm p-md@md">
            <div className="h5 font-weight-bold letter-spacing-xs">
              Projects
            </div>
            <div className="mute letter-spacing-xs">
              You haven’t created a project yet. Get started by selecting a template or start from an empty project.
            </div>
          </div>
          <hr className="w-100 border border-color-black-alpha-2"/>
          <div>
            <div className="row row-gap-lg">
              <div className="col-12 col-6@md">
                <div className="stack-x-l m-bw-x-lg p-md@md border border-color-white border-color-primary-alpha-3@hover bg-color-primary-alpha-1@hover radius-md">
                  <div className="h3 p-lg bg-color-orange radius-md">
                    <i className="icon iconoir-menu color-white"></i>
                  </div>
                  <div className="stack-y-l m-bw-y-sm">
                    <div className="text-lg m-bw-x-sm">
                      <span>Create a List</span>
                      <i className="icon iconoir-arrow-right"></i>
                    </div>
                    <div className="mute">
                      Another to-do system you'll try but eventually give up on.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="stack-x-l m-bw-x-lg p-md@md border border-color-white border-color-yellow-alpha-5@hover bg-color-yellow-alpha-1@hover radius-md">
                  <div className="h3 p-lg bg-color-yellow radius-md">
                    <i className="icon iconoir-calendar color-white"></i>
                  </div>
                  <div className="stack-y-l m-bw-y-sm">
                    <div className="text-lg m-bw-x-sm">
                      <span>Create a Calendar</span>
                      <i className="icon iconoir-arrow-right"></i>
                    </div>
                    <div className="mute">
                      Stay ontop of your deadlines, or don't ⎯ it's up to you.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="stack-x-l m-bw-x-lg p-md@md border border-color-white border-color-green-alpha-3@hover bg-color-green-alpha-1@hover radius-md">
                  <div className="h3 p-lg bg-color-green radius-md">
                    <i className="icon iconoir-media-image color-white"></i>
                  </div>
                  <div className="stack-y-l m-bw-y-sm">
                    <div className="text-lg m-bw-x-sm">
                      <span>Create a Gallery</span>
                      <i className="icon iconoir-arrow-right"></i>
                    </div>
                    <div className="mute">
                      Great for mood boards and inspiration.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="stack-x-l m-bw-x-lg p-md@md border border-color-white border-color-blue-alpha-3@hover bg-color-blue-alpha-1@hover radius-md">
                  <div className="h3 p-lg bg-color-blue radius-md">
                    <i className="icon iconoir-kanban-board color-white"></i>
                  </div>
                  <div className="stack-y-l m-bw-y-sm">
                    <div className="text-lg m-bw-x-sm">
                      <span>Create a Board</span>
                      <i className="icon iconoir-arrow-right"></i>
                    </div>
                    <div className="mute">
                      Track task in different your project.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="stack-x-l m-bw-x-lg p-md@md border border-color-white border-color-purple-alpha-3@hover bg-color-purple-alpha-1@hover radius-md">
                  <div className="h3 p-lg bg-color-purple radius-md">
                    <i className="icon iconoir-kanban-board color-white"></i>
                  </div>
                  <div className="stack-y-l m-bw-y-sm">
                    <div className="text-lg m-bw-x-sm">
                      <span>Create a Spreadsheet</span>
                      <i className="icon iconoir-arrow-right"></i>
                    </div>
                    <div className="mute">
                      Last of numbers and things ⎯ good for neds.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="stack-x-l m-bw-x-lg p-md@md border border-color-white border-color-secondary-alpha-3@hover bg-color-secondary-alpha-1@hover radius-md">
                  <div className="h3 p-lg bg-color-secondary radius-md">
                    <i className="icon iconoir-kanban-board color-white"></i>
                  </div>
                  <div className="stack-y-l m-bw-y-sm">
                    <div className="text-lg m-bw-x-sm">
                      <span>Create a Timeline</span>
                      <i className="icon iconoir-arrow-right"></i>
                    </div>
                    <div className="mute">
                      LGet a birds-eye-view of procrastination.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-100 border border-color-black-alpha-2"/>
          <div className="p-md@md">
            <a href="javascript" className="button button-style-link">
              <span>Or start from an empty project</span>
              <i className="icon iconoir-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WithStartingPoints;