import React from 'react';

import 'App.css';

function WithİmageTiles () {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="stack-y-l m-bw-y-xl m-bw-y-none@md stack-x-jt@md m-bw-x-lg@md">
          <div className="w-50@md m-bw-y-lg">
            <div className="h3 font-weight-bold">
              Our people
            </div>
            <div className="text-xl letter-spacing-sm line-height-md color-black-alpha-6">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.
            </div>
            <div className="text-lg letter-spacing-xs line-height-md color-black-alpha-6">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </div>
            <a href="javascript:;" className="button">
              Join our team
              <i className="iconoir-arrow-right p-l-xs"></i>
            </a>
          </div>
          <div className="w-50@md">
            <img src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80" alt="" className="radius-xl" />
          </div>
          <div className="absolute right-80 top-100 w-100 w-50@md">
            <img src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80" alt="" className="radius-xl"/>
          </div>
        </div>
        <div className="absolute left-25 w-100 w-40@md m-y-xl">
          <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80" alt="" className="radius-xl"/>
        </div>
        <div className="absolute right-0 w-30 m-y-xl hidden@sm visible@md">
          <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80" alt="" className="radius-xl"/>
        </div>
      </div>
    </section>
  )
}
export default WithİmageTiles;