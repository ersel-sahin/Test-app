import React from 'react';

import 'App.css';

function WithProductScreenshot() {
  return (
    <section className="stack-y-c h-100vh">
      <div className="absolute top-0 right-0 w-50 h-100 hidden visible@lg">
        <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" className="maximize object-contain" alt="" />
      </div>
      <div className="wrap">
        <div className="row">
          <div className="col-12 col-6@lg p-r-5xl@lg">
            <div className="p-y-xl m-bw-y-lg">
              <div className="stack-y-l">
                <div className="text-lg font-weight-bold color-primary">
                  Deploy faster
                </div>
                <div className="h1">
                  A better workflow
                </div>
              </div>
              <div className="p-b-md text-lg line-height-md mute-75">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </div>
              <div className="stack-y-l m-bw-y-lg">
                <div className="stack-x-t m-bw-x-sm">
                  <div className="text-xl color-primary">
                    <i className="iconoir-cloud-upload"></i>
                  </div>
                  <div>
                    <strong>Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </div>
                </div>
                <div className="stack-x-t m-bw-x-sm">
                  <div className="text-xl color-primary">
                    <i className="iconoir-lock"></i>
                  </div>
                  <div>
                      <strong>SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </div>
                </div>
                <div className="stack-x-t m-bw-x-sm">
                  <div className="text-xl color-primary">
                    <i className="iconoir-database-solid"></i>
                  </div>
                  <div>
                    <strong>Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="visible hidden@lg">
          <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" className="max-w-100vw" />
        </div>
      </div>
    </section>
  );
}

export default WithProductScreenshot;