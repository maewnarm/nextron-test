import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="header-title">
          <p>Indirect Time recorder</p>
        </div>
        <div className="header-menu">
          <Link href="/home">
            <HomeOutlined />
          </Link>
          <Link href="/setting">
            <SettingOutlined />
          </Link>
        </div>
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <p>developed by PE DX</p>
      </div>
    </>
  );
};

export default Layout;
