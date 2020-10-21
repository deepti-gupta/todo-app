import React, { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Todo from "../Components/Todo";

const { Header, Content, Sider } = Layout;

function Dashboard() {
  const [menu, setmenu] = useState("home");
  const onMenuSelect = (e) => {
    setmenu(e.key);
  };

  const renderContent = () => {
    switch (menu) {
      case "home":
        return <Home></Home>;
      case "about":
        return <About></About>;
      case "contact":
        return <Contact></Contact>;
      default:
        return null;
    }
  };
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" onSelect={onMenuSelect}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Row>
          <Col span={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {renderContent()}
          </Col>
          <Col span={[6, { xs: 8, sm: 16, md: 24, lg: 32 }]} offset={6}>
            <Todo></Todo>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Dashboard;
