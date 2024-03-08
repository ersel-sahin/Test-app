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
    <div className="col-12 col-6@md">
      <div className="stack-x-t m-bw-x-md p-xl@md">
        <div className="h5 p-t-sm p-x-sm bg-color-primary color-white radius-md">
          {item}
        </div>
        <div className="m-bw-y-xs">
          <div className="text-xl">
            <b>
              {b}
            </b>
          </div>
          <div className="text-lg letter-spacing-xs mute-75">
          {description}
          </div>
        </div>
      </div>
    </div>
  )
}

function WithProductScreenshot() {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="m-bw-y-5xl">
          <div className="wrap-mini m-bw-y-md text-center">
            <div className="text-xl font-weight-bold color-primary">
                Deploy faster
              </div>
              <div className="h4">
                Everything you need to deploy your app
              </div>
              <div className="p-x-5xl@md text-xl line-height-md mute-75">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
              </div>
          </div>
          <div className="row row-gap-xl">
            <İtems
            item={<i className="iconoir-cloud-upload"></i>}
            b="Push to deploy"
            description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
            />
            <İtems
            item={<i className="iconoir-lock"></i>}
            b="SSL certificates."
            description="Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet."
            />
            <İtems
            item={<i className="iconoir-database-solid"></i>}
            b="Database backups."
            description="Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque."
            />
            <İtems
            item={<i className="iconoir-database-solid"></i>}
            b="Advanced security"
            description="Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WithProductScreenshot;