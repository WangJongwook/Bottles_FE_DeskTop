import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaSplotch } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { RiArrowRightSFill } from "react-icons/ri";
import { BsCartCheck, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideBarMenu from "./SideBarMenu";

//메뉴 목록
const routes = [
  {
    path: "/home",
    name: "홈",
    icon: <FaHome />,
  },
  {
    path: "/myfeed",
    name: "내 피드",
    icon: <FaUser />,
  },
  {
    path: "/popular",
    name: "인기피드",
    icon: <FaSplotch />,
  },
  {
    path: "/search",
    name: "검색",
    icon: <BsSearch />,
  },
  {
    path: "/setting",
    name: "설정",
    icon: <AiFillSetting />,
  },
];

//애니메이션 설정
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* 스크린 */}
      {/* <div className="screen">{children}</div> */}
      <div className="screen">screen</div>

      {/* 사이드 바 */}
        <motion.div
          animate={{
            width: isOpen ? "140px" : "0px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          {/* 사이드바 목록  */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SideBarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }
              // 애니메이션
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        {/* 토글바 */}
      <div className="toggle-bar-container">
      <div className="toggle-bar">
        <RiArrowRightSFill size="50" onClick={toggle} />
      </div>
      </div>

    </>
  );
};

export default SideBar;
