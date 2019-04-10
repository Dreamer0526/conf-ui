import React from "react";
import { Layout } from 'antd';
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';
import { IntlProvider, addLocaleData } from 'react-intl';

import Poc from "./views/poc/Poc";
import PageRenderer from "./views/page-renderer/PageRenderer";

import * as ACTION from "./constants/actionTypes";
import { menuField } from "./descriptors/menu";
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
          events: {
            onClick: ACTION.ROUTE_TO_LEAD
          }
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

addLocaleData([...enLocaleData, ...zhLocaleData]);


class App extends React.Component {
  // componentDidMount() {
  //   const elem = document.getElementById("app");
  //   const color = getComputedStyle(elem).getPropertyValue('--color-border')
  //   console.log(color)
  // }

  render() {
    const { theme, locale, messages } = this.props;

    return (
      <div id="app" className={`${theme}`}>
        <BrowserRouter>
          <IntlProvider locale={locale} messages={messages}>

            <Layout className="app-layout">
              <Layout.Sider collapsed={true} theme="light" >
                <PageRenderer descriptor={descriptor} />
              </Layout.Sider>

              <Layout>
                <Layout.Content>
                  <Route path="/poc" component={Poc} />
                </Layout.Content>

                <Layout.Footer >
                  <span>Powered by <strong>Hercule</strong></span>
                  <span style={{ float: "right" }}>© 2017 All right reserved</span>
                </Layout.Footer>
              </Layout>
            </Layout>

          </IntlProvider>
        </BrowserRouter>
      </div>
    );
  }
};


const mapStateToProps = state => state.setting;

export default connect(
  mapStateToProps
)(App);
