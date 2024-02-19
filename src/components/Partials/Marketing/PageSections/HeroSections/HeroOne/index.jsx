import React from "react";
import 'App.css';


function HeroOne() {
  return (
    <div className="container color-black">
      <header className="header-container">
        <div className="header p-y-xl z-10">
          <div className="wrap">
            <div className="stack-x-j">
              <div className="logo m-bw-x-md">
                <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" />
                <div className="h4 font-weight-bold">
                  Logo
                </div>
              </div>
              <div className="hidden visible@md">
                <nav className="nav font-weight-bold">
                  <ul>
                    <li>
                      <a href="javascript:;">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        Marketplace
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        Company
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="content-container">
        <div className="content">
          <div className="w-100 h-100vh absolute bg-color-primary m-l-50" style={{top:'-100px'}}/>
          <div className="wrap">
            <div className="space-5xl"></div>
            <div className="stack-x-l">
              <div className="m-bw-y-lg">
                <div className="display-5 font-weight-bold">
                  <span className="color-primary">SMART</span> BUSİNESS <br/>
                  WİTH <span className="color-primary">SMART</span> PEOPLE
                </div>
                <div className="text-xl mute-50">
                  Grow your business to the next level to improve your business performance<br /> to stay competitive
                </div>
                <a href="javascript:;" className="button">
                  Let's Discuss
                </a>
                <div className="space-md"></div>
                <div className="stack-x-j">
                  <div className="text-center">
                    <div className="h1 font-weight-bold">
                      10+
                    </div>
                    <div className="mute-50">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="h1 font-weight-bold">
                      891
                    </div>
                    <div className="mute-50">
                      Cases Solved
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="h1 font-weight-bold">
                      263
                    </div>
                    <div className="mute-50">
                      Business Partners
                    </div>
                  </div>
                </div>
              </div>
              <div className="stack-x-r">
                <img src="/img/hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroOne;