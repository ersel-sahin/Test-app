import React from 'react';

import 'App.css';

function İtems ({
  item,
  description,
  b,
  ...props
})
{
  return (
    <div className="col-12 col-6@md col-4@lg">
      <div className="stack-x-t m-bw-x-md">
        <div className="h6 color-primary radius-md">
          {item}
        </div>
        <div className="color-white">
        <b className="text-xl">
          {b}
        </b>
        <span className="text-lg mute-75">
          {description}
        </span>
      </div>
      </div>
    </div>
  )
}

function WithProductScreenshot() {
  return (
    <section className="p-y-xl"
      style={{
        backgroundImage:'url(https://wallpaperset.com/w/full/2/8/0/521071.jpg)',
      }}
    >
      <div className="wrap">
        <div className="m-bw-y-xl">
          <div className="wrap-mini m-bw-y-md text-center color-white">
            <div className="text-xl font-weight-bold color-primary">
              Everything you need
              </div>
              <div className="h4 font-weight-bold">
                No server? No problem.
              </div>
              <div className="p-x-5xl@md text-xl line-height-md mute-75">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
              </div>
          </div>
          <div className="mask-gradient-b radius-lg">
            <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt=""/>
          </div>
          <div className="row row-gap-xl">
            <İtems
            item={<i className="iconoir-cloud-upload"></i>}
            b="Push to deploy. "
            description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
            />
            <İtems
            item={<i className="iconoir-lock"></i>}
            b="SSL certificates. "
            description="Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet."
            />
            <İtems
            item={<i className="iconoir-database-solid"></i>}
            b="Database backups. "
            description="Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque."
            />
            <İtems
            item={<i className="iconoir-refresh"></i>}
            b="Simple queues. "
            description="Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget."
            />
            <İtems
            item={<i className="iconoir-download"></i>}
            b="Powerful API. "
            description="Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque."
            />
            <İtems
            item={<i className="iconoir-extrude"></i>}
            b="Advanced security. "
            description="Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WithProductScreenshot;