export const getArticleDetail = (id) => {
  return {
    url: '/articles/getDetail',
    method: 'post',
    data: {
      id,
    },
  }
}

export const addArticle = ({ title, text, tags }) => {
  return {
    url: '/articles/add',
    method: 'post',
    data: {
      title,
      text,
      tags,
    },
  }
}

export const updateArticle = ({ id, title, text, tags }) => {
  return {
    url: '/articles/update',
    method: 'post',
    data: { id, title, text, tags },
  }
}
