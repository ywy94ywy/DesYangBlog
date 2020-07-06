import React, { useState } from "react";
import { Menu, Row, Col, Layout, Card } from "antd";
import Container from "components/Container";
import Nav from "components/Nav";
import { withRouter } from "react-router-dom";
import { http } from "utils";
import { useRequest } from "ahooks";
import "./style.scss";

export default withRouter(({ history }) => {
  const [articleList, setArticleList] = useState([]);
  const getArticleList = useRequest("/articles/getList", {
    requestMethod: (url) => http.post(url),
    onSuccess(res) {
      setArticleList(res.articles);
    },
  });
  return (
    <>
      <Nav />
      <section>
        <Container>
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Card>
                <aside>1</aside>
              </Card>
            </Col>
            <Col span={18}>
              {articleList.map((v) => (
                <Card
                  hoverable
                  key={v.article_id}
                  onClick={() => {
                    history.push("/article?p=" + v.article_id);
                  }}
                  style={{ marginBottom: 24 }}
                >
                  <article
                  // onClick={(e) => {
                  //   e.stopPropagation();

                  //   console.log(123);
                  // }}
                  >
                    {v.title}
                  </article>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
});
