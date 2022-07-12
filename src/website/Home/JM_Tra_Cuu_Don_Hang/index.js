import React from "react";
import "antd/dist/antd.css";
import { Typography, Space, Button, Input } from "antd";
import TraCuuDonHangStyle from "./tracuudonhang.style";
import { FaShippingFast } from "react-icons/fa";

const { Title } = Typography;

const TraCuuDonHangJM = () => {
  return (
    <TraCuuDonHangStyle>
      <div className="main_container">
        <div className="title_content">
          <Title level={2}>
            <Space align="center">
              <FaShippingFast />
              Tra Cứu Đơn Hàng
            </Space>
          </Title>
        </div>

        <div className="order_content">
          <Title level={5}>Số Điện Thoại:</Title>
          <Input placeholder="Số điện thoại ( bắt buộc )" />
          <Title level={5}>Mã Đơn Hàng:</Title>
          <Input placeholder="Mã đơn hàng ( bắt buộc )" />
          <Button>Tra Cứu</Button>
        </div>
      </div>
    </TraCuuDonHangStyle>
  );
};

export default TraCuuDonHangJM;
