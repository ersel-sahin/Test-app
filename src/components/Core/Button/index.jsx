import React from 'react';

import 'App.css';

function Button({
  href,
  type,
  onClick,
  label = 'Submit',
  icon,
  color,
  size,
  block = false,
  disabled,
  ...props
}) {
  let className = 'button';

  if (color) {
    className += ` button-color-${color}`;
  }

  if (size) {
    className += ` button-size-${size}`;
  }

  if (block) {
    className += ' button-block';
  }

  return (
    <>
      {href && (
        <a
          href={href}
          onClick={onClick}
          className={className}
          disabled={disabled}
          {...props}
        >
          {label}
          {icon && (
            <span className={`iconoir${icon}`}></span>
          )}
        </a>
      )}
      {!href && (
        <button
          type={type}
          onClick={onClick}
          className={className}
          disabled={disabled}
          {...props}
        >
          {label}
          {icon && (
            <span className={`iconoir${icon}`}></span>
          )}
        </button>
      )}
    </>
  );
}

export default Button;