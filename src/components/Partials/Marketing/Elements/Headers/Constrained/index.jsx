import React from "react";

import 'App.css';

function Constrained() {
  function drawerOpen() {
    document.querySelector('body').classList.add('overflow-hidden');
    document.querySelector('#drawer').classList.remove('mute-0', 'event-none');
    document.querySelector('#drawer-overlay').classList.remove('mute-0');
    document.querySelector('#drawer-content-container').classList.remove('offset-l-n-100');
  }

  function drawerClose() {
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelector('#drawer').classList.add('mute-0', 'event-none');
    document.querySelector('#drawer-overlay').classList.add('mute-0');
    document.querySelector('#drawer-content-container').classList.add('offset-l-n-100');
  }

  return (
    <>
      <div className="container">
        <header className="header-container top-0 w-100">
          <div className="header p-xl bg-color-black-alpha-1 shadow shadow-size-xl">
            <div className="wrap">
              <div className="stack-x-j">
                <div className="logo">
                  <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" />
                </div>
                <div className="hidden visible@md">
                  <nav className="nav">
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
                <div className="stack-x-l">
                  <a href="javascript:;:;" className="button button-style-plain button-color-primary">
                    Log in
                  </a>
                  <span className="visible hidden@md">
                    <a
                      href="javascript:;"
                      onClick={(e) => {
                        e.preventDefault();
                        drawerOpen();
                      }}
                      className="button button-style-plain button-color-primary button-fw"
                    >
                      <i className="icon iconoir-menu"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="content-container">
          <div className="content">
          </div>
        </main>
      </div>
      <div id="drawer" className="fixed top-0 left-0 w-100 h-100 mute-0 event-none transition">
        <button
          id="drawer-overlay"
          onClick={(e) => {
            e.preventDefault();
            drawerClose();
          }}
          className="absolute top-0 left-0 w-100 h-100 bg-color-black-alpha-7 mute-0 cursor-pointer transition reset"
        ></button>
        <div id="drawer-content-container" className="stack-y-c w-80 h-100 bg-color-primary offset-l-n-100 transition">
        <div className="logo m-b-5xl">
              <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" />
            </div>
          <div className="w-100">
            <ul>
              <li>
                <a href="javascript:;" className="stack-x-c color-white p-md">
                  <span>
                    PRODUCT
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;" className="stack-x-c color-white p-md">
                  <span>
                    FEATURES
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;" className="stack-x-c color-white p-md">
                  <span>
                    MARKETPLACE
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;" className="stack-x-c color-white p-md">
                  <span className="scale">
                    COMPANY
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Constrained;