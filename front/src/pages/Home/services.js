export const getArticles = () => {
  return {
    url: '/articles/getList',
    method: 'post',
  }
}

export const getTags = () => {
  return {
    url: '/tags/get',
    method: 'post',
  }
}
