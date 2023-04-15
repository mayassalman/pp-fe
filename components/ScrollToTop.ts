import { useEffect } from "react";
import { useRouter } from "next/router";
const ScrollToTop = () => {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return;
};

export default ScrollToTop;
