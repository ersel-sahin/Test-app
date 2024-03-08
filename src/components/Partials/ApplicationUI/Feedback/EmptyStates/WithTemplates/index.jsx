import React from 'react';

import 'App.css';

function BoxCard ({
  icon,
  title,
  desc,
  icons,
  iconBoxColor,
})
{
  return (
    <div className="stack-x-j w-100">
      <div className="stack-x-tl m-bw-x-md">
        <div className={`h5 p-md radius-lg ${iconBoxColor}`}>
          <i className={`color-white icon iconoir-${icon}`}></i>
        </div>
        <div className="m-bw-y-xs">
          <div className="font-weight-bold">
            {title}
          </div>
          <div className="mute">
            {desc}
          </div>
        </div>
      </div>
      <div className="h4 mute">
        <i className={`icon iconoir-${icons}`}></i>
      </div>
    </div>
  )
}

function WithTemplates () {
  const items = [
    {
      icon:'megaphone',
      title:'Marketing Campaign',
      desc:'Another to-do system you ll try but eventually give up on.',
      icons:'nav-arrow-right',
      iconBoxColor:'bg-color-primary',
    },
    {
      icon:'code',
      title:'Engineering Project',
      desc:'Another to-do system youll try but expensive that eventually give up on.',
      icons:'nav-arrow-right',
      iconBoxColor:'bg-color-secondary',
    },
    {
      icon:'calendar',
      title:'Event',
      desc:'Like a conference all about you that no one will care about.',
      icons:'nav-arrow-right',
      iconBoxColor:'bg-color-yellow',
    },
  ]
  return (
    <section className="m-y-2xl">
      <div className="wrap-mini">
        <div className="m-bw-y-lg">
          <div className="m-bw-y-sm">
            <div className="text-lg font-weight-bold">
              Create your first project
            </div>
            <div className="mute">
              Get started by selecting a template or start from an empty project.
            </div>
          </div>
          <hr className="m-y-lg"/>
          <a href="javascript:;">
            {items.map((item,index) => (
              <>
                <BoxCard
                icon = {item.icon}
                title = {item.title}
                desc = {item.desc}
                icons= {item.icons}
                iconBoxColor = {item.iconBoxColor}
                iconColor = {item.iconColor}
                />
                {index - 1 < items.length && (
                  <hr className="m-y-lg"/>
                )}
              </>
            ))}
          </a>
          <a href="javascript" className="button button-style-link">
            <span>Or start from an empty project</span>
            <i className="icon iconoir-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
export default WithTemplates;