import { useEffect } from "react";
import { useLocation } from 'Link  from "next/link ';

const ScrollToTop = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return;
};

export default ScrollToTop;
