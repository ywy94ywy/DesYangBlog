import React, { useState } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Sider from "components/Sider";
import Content from "components/Content";
import ArticleEdit from "./ArticleEdit";
import ArticleList from "./ArticleList";

const APP = () => {
  return (
    <Router>
      <Layout>
        <Sider />
        <Content>
          <Switch>
            <Route path="/articles/list">
              <ArticleList />
            </Route>
            <Route path="/articles/edit">
              <ArticleEdit />
            </Route>
            <Route path="/a">
              <div>a</div>
            </Route>
            <Route path="/b">
              <div>b</div>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};
ReactDom.render(<APP />, document.getElementById("root"));
