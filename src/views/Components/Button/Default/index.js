import React from 'react';

/**
 *
 * @param checked
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Button({
  label,
  type = 'default',
  htmlType = 'button',
  children,
  customClass = '',
  ...props
}) {
  return (
    <button
      type={htmlType}
      className={
        type === 'default'
          ? `btn btn-default ${customClass}`
          : `btn btn-secondary ${customClass}`
      }
      {...props}
    >
      {children !== undefined ? children : label}
    </button>
  );
}
