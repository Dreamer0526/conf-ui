import React from "react";
import { Layout } from 'antd';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Poc from "./pages/poc/Poc";
import Feedback from "./pages/feedback/Feedback";
import PageRenderer from "./utils/renderer/PageRenderer";

import { menu, header } from "./appDescriptor";

import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';
import { IntlProvider, addLocaleData } from 'react-intl';
addLocaleData([...enLocaleData, ...zhLocaleData]);


class App extends React.Component {

  render() {
    const { locale, messages } = this.props;

    return (
      <div id="app">
        <BrowserRouter>
          <IntlProvider locale={locale} messages={messages}>

            <Layout className="app-layout">
              <Layout.Sider collapsed>
                <PageRenderer descriptor={menu} />
              </Layout.Sider>

              <Layout>
                <Layout.Header className="app-header">
                  <PageRenderer descriptor={header} />
                </Layout.Header>

                <Layout.Content>
                  <Route path="/feedback" component={Feedback}></Route>
                  <Route path="/poc" component={Poc} />
                </Layout.Content>
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
