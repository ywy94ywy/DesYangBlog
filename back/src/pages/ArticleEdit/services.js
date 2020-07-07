export const getArticleDetail = (id) => {
  return {
    url: "/articles/getDetail",
    method: "post",
    data: {
      id,
    },
  };
};

export const addArticle = ({ title, text }) => {
  return {
    url: "/articles/add",
    method: "post",
    data: {
      title,
      text,
    },
  };
};

export const updateArticle = ({ id, title, text }) => {
  return {
    url: "/articles/update",
    method: "post",
    data: { id, title, text },
  };
};
