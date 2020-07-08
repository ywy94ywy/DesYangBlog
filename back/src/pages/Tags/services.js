export const addTag = (name) => {
  return {
    url: '/tags/add',
    method: 'post',
    data: {
      name,
    },
  }
}

export const delTag = (id) => {
  return {
    url: '/tags/del',
    method: 'post',
    data: {
      id,
    },
  }
}

export const getTags = () => {
  return {
    url: '/tags/get',
    method: 'post',
  }
}
