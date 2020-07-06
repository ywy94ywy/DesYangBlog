import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Nav from "components/Nav";
import Container from "components/Container";
import MdArticle from "components/MdArticle";
import { http } from "utils";
import { useRequest } from "ahooks";
import { Button, Card } from "antd";

export default withRouter(({ history, location }) => {
  const { data } = useRequest("/articles/getDetail", {
    requestMethod: (url) =>
      http.post(url, {
        article_id: location.search.split("=")[1],
      }),
  });

  if (!data) {
    return null;
  }
  
  return (
    <div>
      <Nav />
      <Container>
        <Card>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            history back
          </Button>
          <MdArticle source={data.content} />
        </Card>
      </Container>
    </div>
  );
});
