import { Tabs } from "antd";
import Container from "../Container/Container.jsx";
import React from "react";
import { ReactComponent as Comma } from "../../assets/icon/comma.svg";
import { ReactComponent as ArrowRightDark } from "../../assets/icon/arrow-right-dark.svg";

import "./TabsCustom.scss";

const ServiceTab = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative md:mb-[150px] mb-[50px]">
        <Comma className="absolute top-0 left-[20%] z-[0]" />
        <h1 className="italic text-center relative z-[1]">
          Chuyển đổi số sáng tạo. <br />
          Đồng hành và phát huy nét đẹp văn hóa Việt.
        </h1>
      </div>
      <div>
        <p className="text-center h-[132px]">
          DyBi Creative là công ty định vị hoạt động
          <br /> trong lĩnh vực chuyển đổi số văn hóa.
        </p>
        <p className="text-center">
          Thổi hồn vào kho sử liệu quý giá của dân tộc <br />
          để nâng tầm di sản Việt.
        </p>
      </div>
    </div>
  );
};

const ProjectTab = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative md:mb-[150px] mb-[50px]">
        {/* <Comma className="absolute top-0 left-[20%] z-[0]" /> */}
        <h1 className="text-center relative z-[1] font-[900] text-[58px] md:text-[92px] leading-normal">
          DỰ ÁN BẢO TÀNG
          <br /> SỐ HÓA CỦA DYBI
        </h1>
      </div>
    </div>
  );
};

const ContactTab = () => {
  return (
    <div className="flex items-center justify-center md:gap-[10%] flex-wrap gap-5">
      <div className="flex flex-col items-center justify-center flex-1 md:gap-[70px] gap-[35px] ">
        <h1 className="w-full md:text-[52px] text-[40px]">Chuyển đổi số ngay</h1>
        <a href="#sendEmail" className="flex flex-wrap items-center justify-between w-full gap-5 md:gap-0 p-[10px] text-[#FFFFFF66] hover:text-white hover:bg-btnHover hover:pl-4 transition-all duration-500 cursor-pointer">
          <span className=" text-[32px] font-extralight">Liên hệ với chúng tôi</span>
          <ArrowRightDark />
        </a>
      </div>
      <div className="flex-1 flex gap-[24px] md:gap-[46px] flex-col">
        <h1 className="w-full text-[52px] md:text-[72px] leading-normal">Văn phòng</h1>
        <p>35 Nguyễn Thông, P. Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</p>
        <span className="text-[32px] text-white font-bold">SGallery.vn</span>
        <p>(01) 2345 6789</p>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Dịch vụ",
    children: <ServiceTab />
  },
  {
    title: "Dự án",
    children: <ProjectTab />
  },
  {
    title: "Liên hệ",
    children: <ContactTab />
  }
];
const TabsCustom = ({ tab, onChange }) => (
    <div
      className="h-[915px] !bg-cover relative !bg-center"
      style={{
        background: "url(./assets/images/bg-tabs.png) no-repeat"
      }}>
      <div
        className="absolute inset-0 !bg-cover transition-opacity duration-700 !bg-center"
        style={{
          background: "url(./assets/images/bg-tabs-2.png) no-repeat",
          opacity: tab === 1 ? 1 : 0
        }}></div>
      <Tabs
        className="tabs-custom md:max-w-[80%] max-w-[90%] m-auto h-full"
        onChange={onChange}
        type="card"
        items={data.map((item, i) => {
          return {
            label: <h1>{item.title}</h1>,
            key: i,
            children: item.children
          };
        })}
      />
    </div>
);

export default TabsCustom;
