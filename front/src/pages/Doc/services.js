export const getArticleDetail = (id) => {
  return {
    url: '/articles/getDetail',
    method: 'post',
    data: {
      id,
    },
  }
}
