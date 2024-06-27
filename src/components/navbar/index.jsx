import "./styles.scss";
import { Logo } from "../../assets/icons";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <Logo />
          </div>

          <div className={isActive ? "navigators active" : "navigators"}>
            <div className="close menu_btn" onClick={() => setIsActive(false)}>
              <span>
                <IoMdClose className="logo_icon" />
              </span>
            </div>
            <div className="links">
              <a href="#">about</a>
              <a href="#">SIP</a>
              <a href="#">studio</a>
              <a href="#">SEEQ</a>
              <a href="#">platforms</a>
              <a href="#">initiatives</a>
              <a href="#">more</a>
            </div>

            <div className="btns_section">
              <button>SINC with us</button>
              <button>Apply to SIP 1.0</button>
            </div>
          </div>

          <div className="open menu_btn" onClick={() => setIsActive(true)}>
            <span>
              <CiMenuBurger />
            </span>
          </div>
          <div
            className={isActive ? "backdrop active" : "backdrop"}
            onClick={() => setIsActive(false)}
          ></div>
        </div>
      </nav>
    </>
  );
};
