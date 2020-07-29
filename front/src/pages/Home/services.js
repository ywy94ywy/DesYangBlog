export const getArticles = () => {
  return {
    url: '/articles/getPublished',
    method: 'post',
  }
}

export const getTags = () => {
  return {
    url: '/tags/get',
    method: 'post',
  }
}
