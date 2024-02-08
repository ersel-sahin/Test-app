import React from 'react';
import { createPortal } from 'react-dom';

import 'App.css';

function getElementPosition(element) {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = element.getBoundingClientRect()
  return {
    x: elemRect.left - bodyRect.left,
    y: elemRect.top - bodyRect.top,
  }
}

function Popover({
  handle,
  items,
  children,
  ...props
}) {
  const [isActive, setActive] = React.useState(false);
  const [getPosition, setPosition] = React.useState({
    x: 0,
    y: 0,
  });

  const popoverRef = React.useRef();

  React.useEffect(() => {
    const position = getElementPosition(popoverRef.current)
    setPosition({
      x: position.x - popoverRef.current.offsetWidth,
      y: position.y + popoverRef.current.offsetHeight,
    });
  }, []);

  React.useEffect(() => {
    if (isActive === true) {
      document.body.addEventListener('click', (e) => {
        if (e.target !== popoverRef.current) {
          setActive(false)
        }
      })
    }
  }, [isActive])

  return (
    <>
      <a
        onClick={(e) => {
          console.log('test')
          setActive(!isActive)
        }}
        className="d-block cursor-pointer"
        ref={popoverRef}
      >
        <span className="event-none">
          {handle}
        </span>
      </a>
      {isActive === true && (
        createPortal(
          <>
            <div className="absolute" style={{
              top: `${getPosition.y}px`,
              left: `${getPosition.x}px`,
            }}>
              <div className="d-block p-y-md bg-color-white border border-color-black-alpha-1 radius-xl shadow">
                {items.map((item, index) => (
                  <a key={index} href={item.href} className="stack-x-j p-x-md p-y-xs bg-color-black-alpha-1@hover">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </>,
          document.querySelector('#root')
        )
      )}
    </>
  )
}

export default Popover;