import React from 'react';

import 'App.css';

function SideBySideGrid() {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="row row-gap-xl">
          <div className="col-12 col-4@md">
            <div className="m-bw-y-md">
              <div className="h4 font-weight-bold">
                Get in touch
              </div>
              <div className="text-lg mute-75">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
              </div>
            </div>
          </div>
          <div className="col-12 col-8@md">
            <div className="row row-gap-xl">
              <div className="col-12 col-6@md">
                <div className="m-bw-y-md p-4xl bg-color-light-alpha-7 shadow shadow-size-xs radius-xl">
                  <div className="text-xl font-weight-bold">
                    Collaborate
                  </div>
                  <div className="stack-y-l m-bw-y-xs">
                    <a href="javascript:;" className="font-weight-bold color-primary">
                      collaborate@example.com
                    </a>
                    <a href="javascript:;" className="mute-75">
                      +1 (555) 905-2345
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="m-bw-y-md p-4xl bg-color-light-alpha-7 shadow shadow-size-xs radius-xl">
                  <div className="text-xl font-weight-bold">
                    Press
                  </div>
                  <div className="stack-y-l m-bw-y-xs">
                    <a href="javascript:;" className="font-weight-bold color-primary">
                      collaborate@example.com
                    </a>
                    <a href="javascript:;" className="mute-75">
                      +1 (555) 905-2345
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="m-bw-y-md p-4xl bg-color-light-alpha-7 shadow shadow-size-xs radius-xl">
                  <div className="text-xl font-weight-bold">
                    Join our team
                  </div>
                  <div className="stack-y-l m-bw-y-xs">
                    <a href="javascript:;" className="font-weight-bold color-primary">
                      collaborate@example.com
                    </a>
                    <a href="javascript:;" className="mute-75">
                      +1 (555) 905-2345
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="m-bw-y-md p-4xl bg-color-light-alpha-7 shadow shadow-size-xs radius-xl">
                  <div className="text-xl font-weight-bold">
                    Say hello
                  </div>
                  <div className="stack-y-l m-bw-y-xs">
                    <a href="javascript:;" className="font-weight-bold color-primary">
                      collaborate@example.com
                    </a>
                    <a href="javascript:;" className="mute-75">
                      +1 (555) 905-2345
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-y-5xl"/>
        <div className="row row-gap-xl">
          <div className="col-12 col-4@md">
            <div className="m-bw-y-md">
              <div className="h4 font-weight-bold">
                Locations
              </div>
              <div className="text-lg mute-75">
                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
              </div>
            </div>
          </div>
          <div className="col-12 col-8@md">
            <div className="row row-gap-xl">
              <div className="col-12 col-6@md">
                <div className="m-bw-y-md p-4xl bg-color-light-alpha-7 shadow shadow-size-xs radius-xl">
                  <div className="text-xl font-weight-bold">
                    Los Angeles
                  </div>
                  <div className="m-bw-y-xs">
                    <div className="mute-75">
                      4556 Brendan Ferry
                    </div>
                    <div className="mute-75">
                      Los Angeles, CA 90210
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="m-bw-y-md p-4xl bg-color-light-alpha-7 shadow shadow-size-xs radius-xl">
                  <div className="text-xl font-weight-bold">
                    Chicago
                  </div>
                  <div className="m-bw-y-xs">
                    <div className="mute-75">
                      4556 Brendan Ferry
                    </div>
                    <div className="mute-75">
                      Los Angeles, CA 90210
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="m-bw-y-md p-4xl bg-color-light-alpha-7 shadow shadow-size-xs radius-xl">
                  <div className="text-xl font-weight-bold">
                    New York
                  </div>
                  <div className="m-bw-y-xs">
                    <div className="mute-75">
                      4556 Brendan Ferry
                    </div>
                    <div className="mute-75">
                      Los Angeles, CA 90210
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-6@md">
                <div className="m-bw-y-md p-4xl bg-color-light-alpha-7 shadow shadow-size-xs radius-xl">
                  <div className="text-xl font-weight-bold">
                    Toronto
                  </div>
                  <div className="m-bw-y-xs">
                    <div className="mute-75">
                      4556 Brendan Ferry
                    </div>
                    <div className="mute-75">
                      Los Angeles, CA 90210
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBySideGrid;