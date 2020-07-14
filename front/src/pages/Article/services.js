export const getArticleDetail = (id) => {
  return {
    url: '/articles/getDetail',
    method: 'post',
    data: {
      id,
    },
  }
}

export const visitArticle = (id) => {
  return {
    url: '/articles/visit',
    method: 'post',
    data: {
      id,
    },
  }
}
