import { useMediaQuery } from "react-responsive";

export const size = {
  mobile: "360px",
  beforeDesktop: "1359px",
  desktop: "1360px",
};

export const device = {
  mobile: `(min-width: ${size.mobile}) and (max-width: ${size.beforeDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const Mobile = ({ children }) => {
  const isMobileQuery = useMediaQuery({
    query: device.mobile,
  });
  return isMobileQuery && children;
};

export const Desktop = ({ children }) => {
  const isDesktopQuery = useMediaQuery({
    query: device.desktop,
  });
  return isDesktopQuery && children;
};
