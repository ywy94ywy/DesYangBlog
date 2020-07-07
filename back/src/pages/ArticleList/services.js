export const getArticleList = () => {
  return {
    url: "/articles/getList",
    method: "post",
  };
};

export const delArticle = (id) => {
  return {
    url: "/articles/del",
    method: "post",
    data: {
      id,
    },
  };
};
