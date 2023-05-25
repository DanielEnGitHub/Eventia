import { useEffect, useState } from "react";
import { toggleSidebar } from "../redux/features/sidebarSlice";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const useSidebarContent = () => {
  const [activeMenu, setActiveMenu] = useState({
    home: true,
    products: false,
    orders: false,
    submodules: false,
    users: false,
    events: false,
  });

  // sidebar redux state
  const dispatch = useDispatch();
  const onClose = () => dispatch(toggleSidebar());

  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    // get pathname from url form react router
    const pathname = path.split("/")[2];
    handleClick(!pathname ? "/" : pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const handleClick = (menu) => {
    // retorn new array items with the same key but false value
    const newActiveMenu = { ...activeMenu };
    Object.keys(activeMenu).map((key) => {
      if (key === menu) {
        newActiveMenu[key] = true;
      } else {
        newActiveMenu[key] = false;
      }
      return null;
    });
    setActiveMenu(newActiveMenu);
  };

  return { activeMenu, onClose, handleClick };
};
