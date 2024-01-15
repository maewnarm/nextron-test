import {
  HomeOutlined,
  MinusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { ipcRenderer } from "electron";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="header-title">
          <Image src="/images/pe-dx-logo.ico" width={24} height={24} />
          <p>Indirect Time recorder</p>
        </div>
        <div className="header-menu">
          <Button
            type="text"
            onClick={() => ipcRenderer.send("minimize")}
            style={{ padding: 0, color: "white" }}
          >
            <MinusOutlined color="white" />
          </Button>
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
