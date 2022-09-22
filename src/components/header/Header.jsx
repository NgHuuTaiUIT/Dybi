import React from "react";
import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/icon/Dybi-logo.svg";
import { ReactComponent as FaceBook } from "../../assets/icon/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icon/instagram.svg";

const Header = () => {
  // const { setShow: setShowMenu } = useContext(MenuContext);
  // const { setShow } = useContext(CoverBackGroundContext);

  return (
    <div className="w-full mx-auto header z-[10] relative py-[72px]">
      <Logo className="m-auto " />
      <div className="absolute top-[45px] flex right-[20px] gap-[70px]">
        <a
          href="https://www.facebook.com/dybi.creative"
          target={"_blank"}
          rel="noreferrer">
          <FaceBook />
        </a>
        <a
          href="https://www.facebook.com/dybi.creative"
          target={"_blank"}
          rel="noreferrer">
          <Instagram />
        </a>
      </div>
    </div>
  );
};

export default Header;
