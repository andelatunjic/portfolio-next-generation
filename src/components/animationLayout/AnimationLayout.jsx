import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const AnimationLayout = () => {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default AnimationLayout;
