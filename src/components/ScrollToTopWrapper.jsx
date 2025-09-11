// ScrollToTopWrapper.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // ✅ doesn't render anything
};

export default ScrollToTopWrapper;
