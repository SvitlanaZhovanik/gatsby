import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({
  onClick,
  IconComponent,
  disabled,
  style,
  className,
  label = 'button',
  preload,
}) => {
  return (
    <button
      aria-label={label}
      type="button"
      className={`${className} flex justify-center items-center p-2 `}
      onClick={onClick}
      disabled={disabled}
      style={style}
      onMouseOver={preload}
      onTouchStart={preload}
    >
      {IconComponent ? (
        <IconComponent
          size={20}
          className="transition-colors stroke-slate-50 hover:stroke-slate-200"
        />
      ) : (
        label
      )}
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  IconComponent: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default IconButton;
