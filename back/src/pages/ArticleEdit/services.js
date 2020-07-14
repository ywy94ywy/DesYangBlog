export const getArticleDetail = (id) => {
  return {
    url: '/articles/getDetail',
    method: 'post',
    data: {
      id,
    },
  }
}

export const addArticle = (data) => {
  return {
    url: '/articles/add',
    method: 'post',
    data,
  }
}

export const updateArticle = (data) => {
  return {
    url: '/articles/update',
    method: 'post',
    data,
  }
}
