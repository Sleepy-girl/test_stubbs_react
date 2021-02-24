import { device } from "../common/deviceSizes";
import { useMediaQuery } from "react-responsive";

const useDeviceSizes = () => {
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  return { isMobileDevice, isDesktopDevice };
};

export default useDeviceSizes;
