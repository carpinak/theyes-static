import React from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";
import theme from "../utils/theme";
import LOGO from "./LOGO";

const iconData = {
  LOGO,
};

export default function Icon({ name, style = {}, ...props }) {
  const Component = iconData[name];

  if (Component) {
    return (
      <Component
        style={{
          height: "1.5rem",
          width: "auto",
          color: theme.textDark,
          ...style,
        }}
        {...props}
      />
    );
  }
  return <></>;
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconData)).isRequired,
  style: stylePropType,
};

Icon.defaultProps = {
  style: {},
};
