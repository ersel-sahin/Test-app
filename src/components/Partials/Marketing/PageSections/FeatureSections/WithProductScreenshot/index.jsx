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
    <div className="stack-x-tl m-bw-x-sm">
      <div className="text-xl color-primary">
        {item}
      </div>
      <div>
        <b>
          {b}
        </b>
        {description}
      </div>
    </div>
  )
}

function WithProductScreenshot() {
  return (
    <section className="stack-y-c h-100vh">
      
      <div className="wrap">
        <div className="row row-gap-y-xl">
          <div className="col-12 col-6@lg">
            <div className="m-bw-y-sm">
              <div className="text-xl font-weight-bold color-primary">
                Deploy faster
              </div>
              <div className="display-5">
                A better workflow
              </div>
              <div className="p-b-md text-xl line-height-md mute-75">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </div>
              <div className="m-bw-y-lg">
                <İtems
                item={<i className="iconoir-cloud-upload"></i>}
                b="Push to deploy"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                />
                <İtems
                item={<i className="iconoir-lock"></i>}
                b="SSL certificates."
                description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
                />
                <İtems
                item={<i className="iconoir-database-solid"></i>}
                b="Database backups."
                description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-6@lg">
            <div className="absolute@lg left-10@lg w-100vw w-50vw@lg">
              <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" className="radius-md" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default WithProductScreenshot;