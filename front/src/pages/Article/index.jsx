import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import MarkdownViewer, { useMarkDown } from "components/MarkdownViewer";
import IconFont from "components/IconFont";
import moment from "moment";
import { useRequest, useQuery } from "utils";
import { Card, Spin } from "antd";
import { getArticleDetail, visitArticle } from "./services";
import { getTags } from "../Home/services";
import styles from "./style.scss";

export default () => {
  const query = useQuery();
  const id = query.get("p");
  const getArticleDetailRequest = useRequest(getArticleDetail, {
    manual: true,
  });
  const visitArticleRequest = useRequest(visitArticle, {
    onSuccess() {
      getArticleDetailRequest.run(id);
    },
    manual: true,
  });
  const getTagsRequest = useRequest(getTags);

  const tagsMap = {};

  if (getTagsRequest.data) {
    getTagsRequest.data.forEach((v) => (tagsMap[v.id] = v.name));
  }

  useEffect(() => {
    if (id) {
      visitArticleRequest.run(id);
    }
  }, [id]);

  if (!getArticleDetailRequest.data) {
    return <Spin />;
  }
  const text = getArticleDetailRequest.data.text;
  const words = text.length;

  return (
    <Card className={styles.article}>
      <div className={styles.layout}>
        <div className={styles.left}>
          {getArticleDetailRequest.data.tags.map((v) => (
            <span
              key={v}
              style={{
                fontSize: 12,
                background: "#ccc",
                marginRight: 12,
                padding: "0 4px",
              }}
            >
              {tagsMap[v]}
            </span>
          ))}
          <h1>{getArticleDetailRequest.data.title}</h1>
          <ul className={styles.info}>
            <li>
              <IconFont type="icon-calendar" />
              发布日期：
              {moment(getArticleDetailRequest.data.create_time).format(
                "YYYY-MM-DD"
              )}
            </li>
            <li>
              <IconFont type="icon-file-word" />
              文章字数：{(words / 1000).toFixed(1)}k
            </li>
            <li>
              <IconFont type="icon-time-circle" />
              阅读时长：{Math.round(words / 300)}分
            </li>
            <li>
              <IconFont type="icon-eye" />
              阅读次数：{getArticleDetailRequest.data.visits}
            </li>
          </ul>
          <MarkdownViewer source={text} />
        </div>
        <div className={styles.right}>
          <h2>目录</h2>
          <Contents source={text} />
        </div>
      </div>
    </Card>
  );
};

const Contents = ({ source }) => {
  const [text, contents] = useMarkDown(source);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: contents,
      }}
    ></div>
  );
};
