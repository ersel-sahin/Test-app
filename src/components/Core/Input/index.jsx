import React from 'react';
import 'App.css';

function Input({
  type = 'text',
  name,
  domId,
  placeholder,
  value,
  color,
  size,
  disabled,
  id,
  ...props
}) {
  let className = 'input';

  if (color) {
    className += ` input-color-${color}`;
  }

  if (size) {
    className += ` input-size-${size}`;
  }

  return (
    <input
      type={type}
      name={name}
      id={id}
      domId={domId}
      placeholder={placeholder}
      value={value}
      className={className}
    />
  );
}

export default Input;