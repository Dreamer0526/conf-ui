import React from "react";
import { Layout } from 'antd';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Poc from "./views/poc/Poc";
import PageRenderer from "./views/page-renderer/PageRenderer";

import * as ACTION from "./metadata/actionTypes";

import { menuField } from "./descriptors/menu";

const { Content, Footer, Sider } = Layout;

const descriptor = [
  {
    ...menuField,
    structure: [{
      title: <span className="icon wmp" />,
      options: [
        {
          key: "dist",
          label: <Link to="/poc"><span className="icon wmp" />智能大脑下发报告</Link>,
        }, {
          key: "lead",
          label: <Link to="/lead"><span className="icon wmp" />智能大脑线索上传</Link>,
          action: ACTION.ROUTE_TO_LEAD
        }, {
          key: "arch",
          label: <Link to="/arch"><span className="icon wmp" />产品架构</Link>,
        }
      ]
    }, {
      title: <span className="icon cycle" />,
      options: [{
        key: "value",
        label: <Link to="value"><span className="icon wmp" />线索价值分析</Link>,
      }]
    }]
  }
];

const App = () => {
  return (
    <BrowserRouter>
      <Layout className="app-layout">
        <Sider collapsed={true} theme="light" >
          <PageRenderer descriptor={descriptor} />
        </Sider>
        <Layout>
          <Content>
            <Route path="/poc" component={Poc} />
          </Content>

          <Footer >
            <span>Powered by <strong>Hercule</strong></span>
            <span style={{ float: "right" }}>© 2017 All right reserved</span>
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
