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
      <div className="absolute md:top-[45px] flex md:right-[20px] md:gap-[70px] top-3 right-[10px] gap-[10px]">
        <a
          href="https://www.facebook.com/dybi.creative"
          target={"_blank"}
          rel="noreferrer">
          <FaceBook className="m-auto icon"/>
        </a>
        <a
          href="https://www.facebook.com/dybi.creative"
          target={"_blank"}
          rel="noreferrer">
          <Instagram className="m-auto icon"/>
        </a>
      </div>
    </div>
  );
};

export default Header;
