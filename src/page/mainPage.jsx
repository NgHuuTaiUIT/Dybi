import { Collapse, Form, Input } from "antd";
import React, { useState } from "react";
import Container from "../components/Container/Container";
import TabsCustom from "../components/Tabs/TabsCustom";
import { ReactComponent as ArrowDown } from "../assets/icon/arrow-down.svg";
import { ReactComponent as ArrowRight } from "../assets/icon/arrow-right.svg";
import { getData } from "../utils/getData";

const Dropdown = ({ tab }) => {
  // const [activeItem, setActiveItem] = useState(0);
  const data = getData(tab);
  return (
    <Container style={{ minHeight: "0" }}>
      <div className="max-w-[980px] mx-auto">
        <CollapseCustom data={data} />
      </div>
    </Container>
  );
};

const CollapseCustom = ({ data }) => {
  const { Panel } = Collapse;

  return (
    <Collapse
      bordered={false}
      // defaultActiveKey={["1"]}
      expandIcon={panel => (
        <ArrowDown
          className={`${
            panel.isActive ? "transform !rotate-180" : "transform !rotate-0 "
          } translate-y-[-50%] transition-all`}
        />
      )}
      expandIconPosition="end"
      className="bg-primaryBg ">
      {data.map((item, idx) => (
        <Panel
          header={<h1 className="flex justify-between">{item.header}</h1>}
          className="pb-[12px] mt-[30px]"
          key={`${idx + 1}`}>
          {item.body.type === "normal" &&
            item.body.children.map((panelItem, idx) => (
              <PanelItem panel={panelItem} key={`children-${idx}`} />
            ))}

          {item.body.type === "has-children" && (
            <CollapseCustom data={item.body.children} />
          )}
        </Panel>
      ))}
    </Collapse>
  );
};

const PanelItem = ({ panel }) => {
  return (
    <div
      style={{
        background: `url(${panel.background}) no-repeat`
      }}
      className="w-full flex flex-col gap-[20px] p-[30px] mb-[35px] !bg-cover">
      {panel.sub !== "" && (
        <span className="italic text-[15px]">{panel.sub}</span>
      )}
      <h2>{panel.title}</h2>
      <span className="text-ellipsis-3">{panel.text}</span>
      <ArrowRight />
    </div>
  );
};

const GridImage = () => {
  const imgs = [
    {
      mainImg: "./",
      hoverImg: ""
    },
    {
      mainImg: "",
      hoverImg: ""
    },
    {
      mainImg: "",
      hoverImg: ""
    },
    {
      mainImg: "",
      hoverImg: ""
    },
    {
      mainImg: "",
      hoverImg: ""
    },
    {
      mainImg: "",
      hoverImg: ""
    }
  ];
  return (
    <div className="grid grid-cols-1 gap-5 m-auto md:grid-cols-2 lg:grid-cols-3 w-fit ">
      {imgs.map((img, idx) => (
        <div className="relative h-[300px] w-[300px] m-auto ">
          <div
            className="bg-blend absolute inset-0 z-[2] hover:opacity-0 transition-opacity ease-in-out duration-1000"
            style={{
              background: `linear-gradient(0deg, rgba(34, 33, 96, 0.5), rgba(34, 33, 96, 0.5)), linear-gradient(0deg, #FFFFFF, #FFFFFF), url(./assets/images/img-${
                idx + 1
              }.png)`,
              backgroundBlendMode: "color, color, normal"
            }}></div>
          <img
            src={`./assets/images/hover-img-${idx + 1}.png`}
            alt=""
            className="absolute inset-0 z-[0] "
          />
        </div>
      ))}
    </div>
  );
};

const FormCustom = () => {
  const layout = {
    // labelCol: { span: 3 },
    // wrapperCol: { span: 21 }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!"
    },
    number: {
      range: "${label} must be between ${min} and ${max}"
    }
  };

  const onFinish = values => {
    console.log(values);
  };

  return (
    <>
      <Container className="!min-h-0">
        <div className="max-w-[80%] m-auto" id="sendEmail">
          <h1 className="text-center max-w-[100%] text-[72px] leading-normal mb-[82px]">
            Gửi tin nhắn
          </h1>
          <Form
            // {...layout}
            layout="vertical"
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}>
            <Form.Item
              className="md:inline-block md:w-[48%] w-full bg-opacity-0 "
              name={["Name"]}
              label={
                <h1 className="whitespace-nowrap pb-[18px]">Tên của bạn</h1>
              }
              rules={[{ required: true }]}>
              <Input className=" !bg-[#2221601A] py-[15px] border-0" />
            </Form.Item>
            <Form.Item
              className="md:inline-block md:w-[48%] w-full md:ml-[3%]"
              name={["Email"]}
              label={
                <h1 className="whitespace-nowrap pb-[18px]">Địa chỉ email</h1>
              }
              rules={[{ type: "email" }]}>
              <Input className=" !bg-[#2221601A] py-[15px] border-0" />
            </Form.Item>
            <Form.Item
              name={["user", "introduction"]}
              label={
                <h1 className="whitespace-nowrap pb-[18px]">
                  Nội dung liên hệ
                </h1>
              }
              className="w-full">
              <Input.TextArea
                className=" !bg-[#2221601A] w-full border-0"
                rows={10}
              />
            </Form.Item>
            <Form.Item>
              <button htmlType="submit" className="hover:bg-btnHover active:bg-btnHover hover:text-white active:text-white">
                Gửi tin nhắn
              </button>
            </Form.Item>
          </Form>
        </div>
        <div className="w-[60%] border border-solid border-[#2221604D] m-auto mt-[127px]"></div>
      </Container>
    </>
  );
};

const MainPage = () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <TabsCustom onChange={key => setTab(key)} tab={tab} />
      {tab !== 2 ? <Dropdown tab={tab} /> : <FormCustom />}
      {tab !== 1 && <GridImage /> }
    </div>
  );
};

export default MainPage;
