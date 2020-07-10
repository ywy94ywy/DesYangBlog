export const addTag = ({ name, type } = {}) => {
  return {
    url: '/tags/add',
    method: 'post',
    data: {
      name,
      type,
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
