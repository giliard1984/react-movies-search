import React, { useContext } from "react";
import { Row, Col, Layout, theme, ConfigProvider, Input, FloatButton } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Outlet } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";

import styles from "./Default.module.scss";

const { Header, Content } = Layout;

const DefaultLayout: React.FC = () => {
  // retrieved states and methods associated with the search context
  const {
    movies,
    setSearchValue,
    totalPages
  } = useContext(SearchContext);

  // antd token
  const {
    token: {
      // colorBgContainer,
      borderRadiusLG
    },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{ components: { Layout: { bodyBg: "#fafafa" } } }}
    >
      <Layout>
        <Header
          className={styles.header}
        >
          <Row justify="center" align="bottom">
            <Col flex="120px" style={{ textAlign: "left" }}>
              <img
                alt="example"
                src="./tmdb-logo.svg"
                style={{ width: "100%" }}
              />
            </Col>
            <Col flex="1100px" className={styles.headerText}>
              Find the movies, tv and series you enjoy!
            </Col>
            <Col flex="80px">
              {`${movies?.length} / ${totalPages.totalResults}`}
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col span={16} className={styles.input}>
              <ConfigProvider theme={{ components: { Input: { colorTextPlaceholder: "#E8E8E8" }}}}>
                <Input
                  className={styles.myInput}
                  size="large"
                  variant="borderless"
                  placeholder="Search for a movie, tv, show, person..."
                  addonBefore={<SearchOutlined style={{ color: "#fff" }} />} 
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </ConfigProvider>
            </Col>
          </Row>
        </Header>
        <Content className={styles.content}>
          <div
            className={styles.outletWrapper}
            style={{ borderRadius: borderRadiusLG }}
          >
            <Outlet />
            <FloatButton.BackTop duration={550} visibilityHeight={800} />
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default DefaultLayout;
