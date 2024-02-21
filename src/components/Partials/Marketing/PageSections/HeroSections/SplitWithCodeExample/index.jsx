import React from "react";
import 'App.css';


function SplitWithCodeExample() {
  return (
    <section className="stack-y-c m-y-xl m-y-none@md h-100vh@md">
      <div className="wrap">
        <div className="stack-y-l m-bw-y-xl m-bw-y-none@md stack-x-l@md m-bw-x-xl@md">
          <div className="m-bw-y-2xl w-50@md">
            <div className="stack-y-l logo">
              <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </div>
            <div className="stack-x-l m-bw-x-lg">
              <a href="javascript:;" className="p-x-sm p-y-xs border border-color-black-alpha-1 border-color-primary@hover shadow shadow-size-xs radius-xl">
                <span>Anim aute id magna aliqua ad ad non deserunt sunt.</span>
                <b className="color-primary">Read more</b>
                <i className="icon p-l-xs color-primary iconoir-arrow-right"></i>
              </a>
            </div>
            <div className="h1 font-weight-bold color-black">
              Data to enrich your online business
            </div>
            <p className="h6 p-r-xl letter-spacing-xs mute-75">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
              qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
              occaecat fugiat aliqua.
            </p>
            <div className="stack-x-l m-bw-x-xl">
              <a href="javascript:;" className="button">
                <span>Get started</span>
              </a>
              <a href="javascript:;" className="button button-style-link button-color-black">
                <span>Learn more</span>
                <i className="p-l-sm text-md iconoir-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="absolute@md left-50@md top-0 w-100vw p-t-5xl p-l-5xl z-10 bg-color-primary color-white radius-xl">
            <div className="m-bw-y-lg z-11 bg-color-black radius-t-lg">
              <div className="stack-x-l p-l-lg m-bw-x-lg border-b border-color-gray-alpha-3 bg-color-gray-alpha-2">
                <b>NotificationSetting.jsx</b>
                <span className="bg-color-gray-alpha-3" style={{width:'1px',height:'50px'}}/>
                <b className="mute">App.jsx</b>
              </div>
              <div className="p-l-lg">
                <pre className="stack-y-l m-bw-y-sm">
                  <code>
                    <code>import</code>
                    <code>{` { `}</code>
                    <span className="color-blue">useState</span>
                    <code>{` } `}</code>
                    <code>from</code>
                    <span className="color-green"> "react"</span>;
                  </code>
                  <code>
                    <code>{`const `}</code>
                    <span className="color-blue">NotificationSetting</span>
                    <code>{` = () => {`}</code>
                    <span className="color-red">'return'</span>
                    <code>{`}`}</code>
                  </code>
                  <div className="space-lg"></div>
                  <code>
                    <span className="color-primary">function Example</span>()
                    <code>{` { `}</code>
                  </code>
                  <code>
                    <code>{`  const`}</code>
                    <code>{` [`}</code>
                    <span className="color-blue">enabled,</span>
                    <span className="color-blue"> setEnabled,</span>
                    <code>{`] `}</code>
                    <code>= useState</code>
                    <code>{`(`}</code>
                    <span className="color-blue">true</span>
                    <code>{`)`}</code>
                  </code>
                  <div className="space-lg"></div>
                  <code>
                    <code>{`  return `}</code>
                    <code>{`(`}</code>
                  </code>
                  <code>
                    <code>{`    <`}</code>
                    <span className="color-primary">{'form '}</span>
                    <code>{'action="/'}</code>
                    <span className="color-green">notification-settings</span>
                    <code>{`" method="`}</code>
                    <span className="color-green">post</span>
                    <code>{`">`}</code>
                  </code>
                  <code>
                    <code>{`      <`}</code>
                    <span className="color-primary">{'Switch '}</span>
                    <code>{'checked={'}</code>
                    <span className="color-blue">{'enabled'}</span>
                    <code>{'} onChange={'}</code>
                    <span className="color-blue">{'setEnabled'}</span>
                    <code>{'} '}</code>
                    <code>{'name="'}</code>
                    <span className="color-blue">notifications</span>
                    <code>{'">'}</code>
                  </code>
                  <code>
                    <code>{`        <`}</code>
                    <span className="color-red">span </span>
                    <span className="color-green">className</span>
                    <code>{'="'}</code>
                    <span className="color-yellow">color-blue</span>
                    <code>{'">'}</code>
                  </code>
                  <code>
                    <code>{'          {'}</code>
                    <span className="color-blue">{'enabled'}</span>
                    <code>{'} '}</code>
                  </code>
                  <code>
                    <code>{`        </`}</code>
                    <span className="color-red">span</span>
                    <code>{`>`}</code>
                  </code>
                  <code>
                    <code>{`      <`}</code>
                    <span className="color-primary">Switch</span>
                  </code>
                  <code>
                    <code>{`      <`}</code>
                    <span className="color-primary">{'input '}</span>
                    <code>{'type="checkbox" name="'}</code>
                    <span className="color-blue">enabled</span>
                    <code>{'" '}</code>
                    <code>{'checked={'}</code>
                    <span className="color-blue">{'enabled'}</span>
                    <code>{'} onChange={'}</code>
                    <span className="color-blue">{'setEnabled'}</span>
                    <code>{'} />'}</code>
                  </code>
                  <code>
                    <code>{`      <`}</code>
                    <span className="color-primary">{'button'}</span>
                    <code>{'>'}</code>
                    <span className="color-blue">{'Submit'}</span>
                    <code>{'</'}</code>
                    <span className="color-primary">{'button'}</span>
                    <code>{'>'}</code>
                  </code>
                  <code>
                    <code>{`    </`}</code>
                    <span className="color-primary">{'form '}</span>
                    <code>{'>'}</code>
                  </code>
                </pre>
                <div className="space-5xl"></div>
              </div>
            </div>
            <div className="absolute left-10@md w-100 h-100vh border-l border-color-primary-alpha-3 bg-color-white-alpha-5 mute-50 shadow"
                style={{
                  transform:'skewX(-40deg)',
                  top:'-225px',
                }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplitWithCodeExample;