"use client";
import { Layout, Menu, theme } from "antd";
import AutoBreadcrumb from "../AutoBreadcrumb/AutoBreadcrumb";
import { DashSideItems } from "@/utils/dashItems";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const { Content, Sider } = Layout;

const DashLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <Layout className='min-h-screen'>
      <Sider
        style={{ background: colorBgContainer }}
        className=' border-0 border-r border-solid border-r-gray-200'
      >
        <div className='my-4 text-center font-bold text-2xl'>Turbo</div>
        <Menu
          mode='inline'
          selectedKeys={[pathname || "datasets"]}
          style={{ border: "none" }}
          onSelect={(item) => {
            navigate(item.key);
          }}
          items={DashSideItems}
        />
      </Sider>
      <Layout>
        <AutoBreadcrumb />
        <Content className='px-4' style={{ background: colorBgContainer }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashLayout;
